const fs = require("fs");
const path = require("path");
const glob = require("glob");

if (process.argv.length < 3) {
  console.log(
    "Expected destination dirname argument.",
    "\n(relative source dirname and glob patterns are optional)."
  );

  process.exit(1);
}

const destination = path.resolve(process.argv[2]);
const source = process.argv.length > 3
  ? path.join(destination, process.argv[3])
  : destination;
  
const patterns = process.argv.length > 4
  ? process.argv.slice(4).map(src => path.join(source, src))
  : [path.join(source, "**/*.js")];

Promise.all(
  patterns.map(src => run(src, destination))
).then(() => {
  console.log("\ndone");
});

async function run(src, dst) {
  const [globErr, files] = await new Promise(rv =>
    glob(src, (...args) => rv(args))
  );

  await Promise.all(files.map(async pathname => {
    const dirname = path.dirname(pathname);
    const filename = path.basename(pathname);
    const basename = path.basename(pathname, path.extname(pathname));

    const [readFileErr, contents] = await new Promise(rv =>
      fs.readFile(pathname, "utf8", (...args) => rv(args))
    );

    let prefs = {
      digest: {
        // destination-relative paths
        all: "",
        byTemplate: ""
      }
    };

    try {
      const [raw] = contents.match(
        /export\s+default\s+json`[^`]*`/
      ) || "null";

      const [template] = raw.match(/`[^`]*`/);
      const json = template.slice(1, -1)
        .replace(/\$\{\s*foldername\s*\}/g, path.basename(dirname))
        .replace(/\$\{\s*basename\s*\}/g, basename)
        .replace(/\$\{\s*filename\s*\}/g, filename);

      prefs = JSON.parse(json) || prefs;
    } catch (err) {
      // TODO: log?
    }

    const meta = {
      all: null,
      byPrefix: {},
      byTemplate: {}
    };

    const sections = contents.match(
      /export\s+default\s+`[^`]*`(.|\n(?!\s*export\s+default\s+null($|[^_\$a-zA-Z0-9])))*\n?/g
    );

    const reps = new Map();
    const padmax = sections.reduce((size, raw) => {
      const [template] = raw.match(/`[^`]*`/);

      reps.set(template, 1 + (0|reps.get(template)));

      const numeral = reps.get(template).toString();

      return numeral.length > size ? numeral.length : size;
    }, 1);

    reps.clear();

    await (
      sections.reduce(async (pending, raw) => {
        if (pending) await pending;

        const offset = raw.search(/`[^`]*`/);
        const [template] = raw.match(/`[^`]*`/);

        reps.set(template, 1 + (0|reps.get(template)));

        const numeral = reps.get(template).toString();
        const count =
          new Array(numeral.length < padmax ? padmax - numeral.length : 0)
            .fill("0").join("") + numeral;

        const prefix = template.slice(1, -1)
          .replace(/\$\{\s*foldername\s*\}/g, path.basename(dirname))
          .replace(/\$\{\s*basename\s*\}/g, basename)
          .replace(/\$\{\s*filename\s*\}/g, filename)
          .replace(/\$\{\s*count\s*\}[^`]*/, "");

        const relname = template.slice(1, -1)
          .replace(/\$\{\s*foldername\s*\}/g, path.basename(dirname))
          .replace(/\$\{\s*basename\s*\}/g, basename)
          .replace(/\$\{\s*filename\s*\}/g, filename)
          .replace(/\$\{\s*count\s*\}/g, count);

        const result = path.join(dst, relname);

        const size = template.length;
        const at = 1 + raw.indexOf("\n", offset + size);
        const text = raw.slice(at).trim();

        await new Promise(rv =>
          fs.mkdir(
            path.dirname(result),
            { recursive: true },
            (...args) => rv(args)
          )
        );

        const [writeFileErr] = await new Promise(rv =>
          fs.writeFile(result, text, (...args) => rv(args))
        );

        meta.byTemplate[template] =
          meta.byTemplate[template] || { paths: [], prefix, template };
        meta.byTemplate[template].paths.push(relname);

        meta.byPrefix[prefix] =
          meta.byPrefix[prefix] || { paths: [], prefix };
        meta.byPrefix[prefix].paths.push(relname);

        meta.all =
          meta.all || { paths: [] };
        meta.all.paths.push(relname);

      }, null)
    );

    if (prefs && prefs.digest) {
      await Promise.all(
        [
          ["all"],
          ...Object.keys(meta.byPrefix).map(
            prefix => ["byPrefix", prefix]
          ),
          ...Object.keys(meta.byTemplate).map(
            template => ["byTemplate", template]
          )
        ].map(async keys => {
          const data = keys.reduce(
            (value, field) => value && value[field],
            meta
          );

          const [group] = keys;
          const template = prefs.digest[group];

          if (template) {
            const relname = template
              .replace(/\$\{\s*prefix\s*\}/g, data.prefix || "")
              .replace(/\$\{\s*template\s*\}/g, data.template || "");

            const result = path.join(dst, relname);
    
            const text = JSON.stringify(data, null, 2);
    
            await new Promise(rv =>
              fs.mkdir(
                path.dirname(result),
                { recursive: true },
                (...args) => rv(args)
              )
            );
    
            const [writeFileErr] = await new Promise(rv =>
              fs.writeFile(result, text, (...args) => rv(args))
            );
          }
        })
      );
    }

    console.log(pathname, sections.length);
  }));
}
