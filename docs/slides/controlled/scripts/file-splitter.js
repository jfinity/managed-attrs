const fs = require("fs");
const path = require("path");

const folder = path.resolve(process.argv[2]);

run();

async function run() {
  const [
    readdirErr,
    files
  ] = await new Promise(rv =>
    fs.readdir(folder, (...args) => rv(args))
  );

  await Promise.all(files.map(async filename => {
    const pathname = path.join(folder, filename);
    const [readFileErr, contents] = await new Promise(rv =>
      fs.readFile(pathname, "utf8", (...args) => rv(args))
    );

    const sections = contents.match(
      /export\s+default\s+`[^`]*`(.|\n(?!\s*export\s+default\s+null($|[^_\$a-zA-Z0-9])))*\n?/g
    );

    const reps = new Map();

    await (
      sections.reduce(async (pending, raw) => {
        if (pending) await pending;

        const offset = raw.search(/`[^`]*`/);
        const [value] = raw.match(/`[^`]*`/);

        reps.set(value, 1 + (0|reps.get(value)));

        let count = reps.get(value).toString();

        count = new Array(
          count.length < 2 ? 2 - count.length : 0
        ).fill("0").join("") + count;

        const name = value.slice(1, -1)
          .replace(/\$\{\s*filename\s*\}/g, filename)
          .replace(/\$\{\s*count\s*\}/g, count);

        const size = value.length;
        const at = 1 + raw.indexOf("\n", offset + size);
        const text = raw.slice(at).trim();

        const result = path.join(folder, name);

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

        console.log("\n", result, "\n", writeFileErr);
      }, null)
    );

    console.log(pathname, sections.length);
  }));

  console.log("\ndone");
}
