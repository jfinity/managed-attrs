const fs = require("fs");
const path = require("path");
const glob = require("glob");

// $ node templit-filer.js destination_dir source_dir globs...

if (process.argv.length < 3) {
  console.log(
    "Expected destination dirname argument.",
    "\n(relative source dirname and glob patterns are optional)."
  );

  process.exit(1);
}

const destination = path.resolve(process.argv[2]);
const source =
  process.argv.length > 3
    ? path.join(destination, process.argv[3])
    : destination;

const patterns =
  process.argv.length > 4
    ? process.argv.slice(4).map(src => path.join(source, src))
    : [path.join(source, "**/*.templit.js")];

Promise.all(patterns.map(src => run(source, src, destination))).then(() => {
  console.log("\ndone");
});

async function run(folder, src, dst) {
  const [globErr, files] = await new Promise(rv =>
    glob(src, (...args) => rv(args))
  );

  await Promise.all(
    files
      .filter(pathname => /\.templit\.js$/.test(pathname))
      .map(async pathname => {
        const builder = require(pathname);

        const value = typeof builder === "function" ? builder() : builder;
        const contents =
          typeof value !== "string" && value && typeof value.then === "function"
            ? await value
            : String(value);

        const relname = pathname
          .slice(folder.length + pathname.indexOf(folder))
          .replace(/\.templit\.js$/, "");
        const result = path.join(dst, relname);

        await new Promise(rv =>
          fs.mkdir(path.dirname(result), { recursive: true }, (...args) =>
            rv(args)
          )
        );

        const [writeFileErr] = await new Promise(rv =>
          fs.writeFile(result, contents, (...args) => rv(args))
        );

        console.log(pathname);
      })
  );
}
