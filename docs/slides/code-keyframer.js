// https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// $ node code-keyframer.js destination_dir source_dir globs...

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
    : [path.join(source, "**/*.js")];

Promise.all(patterns.map(src => run(src, destination))).then(() => {
  console.log("\ndone");
});

async function run(src, dst) {
  const [globErr, files] = await new Promise(rv =>
    glob(src, (...args) => rv(args))
  );

  await Promise.all(
    files.map(async pathname => {
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
        const [raw] =
          contents.match(
            /export\s+default\s+prefs\s*\/\*\s*json\s*\*\/\s*`[^`]*`/
          ) || "null";

        const [template] = raw.match(/`[^`]*`/);
        const json = template
          .slice(1, -1)
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

      const keyframes = contents
        .match(
          /export\s+default\s+keyframe\s*\/\*\s*json\s*\*\/\s*`[^`]*`(.|\n(?![ \t]*export\s+default\s+null($|[^_\$a-zA-Z0-9])))*/g
        )
        .map(raw => {
          const at = raw.search(/`[^`]*`/);
          const [template] = raw.match(/`[^`]*`/);

          const size = template.length;
          const idx = 1 + raw.indexOf("\n", at + size);
          const body = "\0\n" + raw.slice(idx) + "\n\0";

          try {
            const config = JSON.parse(template.slice(1, -1));
            return config.path ? { raw, config, body } : null;
          } catch (e) {
            return null;
          }
        })
        .filter(value => value);

      const details = keyframes.reduce((result, { config, body }) => {
        const ranges = {};
        const guides = {};

        const lines = body.split("\n").map((ln, idx) => {
          const check = ln.lastIndexOf("//") + "//".length;
          if (check < "//".length) {
            return ln;
          }

          const raw = ln.slice(check).trim();

          if (!raw) {
            return ln;
          }

          let tags = [];

          try {
            tags = JSON.parse("[" + raw + "]");

            const chars = ln.slice(0, check - "//".length).replace(/\s*$/, "");

            for (let at = 0; at < tags.length; at += 1) {
              if (!Array.isArray(tags[at])) {
                continue;
              }

              if (tags[at].length && tags[at][0] === null) {
                for (let each = 1; each < tags[at].length; each += 1) {
                  const name = tags[at][each];

                  guides[name] = guides[name] || { name, focus: "", posts: [] };

                  guides[name].posts.push({
                    offset: -1, // zero-indexed
                    line: idx + 1, // one-indexed
                    column: chars.length // one-indexed(?)
                  });
                }
                continue;
              }

              const [label = "", matcher = null, other = undefined] = tags[at];

              if (typeof label !== "string") {
                continue;
              }

              ranges[label] = ranges[label] || { label, focus: "" };

              const value = ranges[label];

              if (
                value.end &&
                value.start &&
                value.start.matcher !== value.end.matcher
              ) {
                continue;
              }

              if (value.start) {
                const { start } = value;
                const end = {
                  offset: -1, // zero-indexed
                  line: idx + 1, // one-indexed
                  column: 0, // one-indexed
                  matcher: [].concat("", matcher || "", "")
                };

                end.matcher =
                  end.matcher && end.matcher.length > 3
                    ? end.matcher.slice(1, 4)
                    : end.matcher;

                ranges[label].end = end;

                const found = 1 + chars.lastIndexOf(end.matcher.join(""));
                const column = found
                  ? found + end.matcher[0].length + end.matcher[1].length
                  : 0;

                end.column = column;

                start.column = start.matcher
                  ? start.column
                  : end.column - end.matcher[1].length;
              } else {
                const start = {
                  offset: -1, // zero-indexed
                  line: idx + 1, // one-indexed
                  column: 0, // one-indexed
                  matcher:
                    matcher !== null || other === null || other === undefined
                      ? [].concat("", matcher || "", "")
                      : null
                };
                const end = {
                  offset: -1, // zero-indexed
                  line: idx + 1, // one-indexed
                  column: 0, // one-indexed
                  matcher:
                    other === undefined || (other === null && matcher !== null)
                      ? null
                      : [].concat("", other || "", "")
                };

                start.matcher =
                  start.matcher && start.matcher.length > 3
                    ? start.matcher.slice(1, 4)
                    : start.matcher;

                end.matcher =
                  end.matcher && end.matcher.length > 3
                    ? end.matcher.slice(1, 4)
                    : end.matcher;

                ranges[label].start = start;
                ranges[label].end = end;

                if (start.matcher) {
                  const found = 1 + chars.indexOf(start.matcher.join(""));
                  const column = found ? found + start.matcher[0].length : 0;

                  start.column = column;
                }

                if (end.matcher) {
                  const found = 1 + chars.lastIndexOf(end.matcher.join(""));
                  const column = found
                    ? found + end.matcher[0].length + end.matcher[1].length
                    : 0;

                  end.column = column;
                } else if (!matcher) {
                  end.column = 1 + chars.length;
                }

                start.column = start.matcher
                  ? start.column
                  : end.column - end.matcher[1].length;

                end.column =
                  end.matcher || !matcher
                    ? end.column
                    : start.column + start.matcher[1].length;

                if (start.column > end.column) {
                  start.column = 0;
                  end.column = 0;
                }

                end.matcher = end.matcher || start.matcher;
              }
            }

            return chars;
          } catch (e) {
            return ln;
          }
        });

        const offsets = lines.reduce(
          (values, ln) => {
            values.push(ln.length + values[values.length - 1]);
            return values;
          },
          [0]
        );

        Object.keys(ranges)
          .map(label => ranges[label])
          .forEach(value => {
            const { start, end } = value;

            start.offset = start.column
              ? start.column - 1 + offsets[start.line - 1] // one-indexed
              : -1;

            end.offset = end.column
              ? end.column - 1 + offsets[end.line - 1] // one-indexed
              : -1;

            value.focus = "" + (start.line - 0); // file= off-by-one
            if (start.line === end.line) {
              if (end.column > start.column) {
                value.focus += "[" + start.column + ":" + end.column + "]";
              }
            } else {
              const column = 1 + offsets[start.line] - offsets[start.line - 1];

              if (column < start.column) {
                value.focus += "[" + start.column + ":" + column + "]";
              }
              value.focus += ",";
              if (end.line > start.line + 2) {
                value.focus += (start.line + 1 - 0) + ":"; // file= off-by-one
              }
              if (end.line > start.line + 1) {
                value.focus += (end.line - 1 - 0) + ","; // file= off-by-one
              }
              value.focus += "" + (end.line - 0); // file= off-by-one
              if (end.column > 1) {
                value.focus += "[1:" + end.column + "]";
              }
            }
          });

        Object.keys(guides)
          .map(name => guides[name])
          .forEach(value => {
            const { posts } = value;

            for (let at = 0; at < posts.length; at += 1) {
              posts[at].offset = offsets[posts[at].line - 1]; // one-indexed

              value.focus += value.focus
                ? "," + posts[at].line
                : posts[at].line;
            }
          });

        result.set(config, { lines, guides, ranges });

        return result;
      }, new Map());

      const reps = new Map();

      const padmin = 1;
      const padmax = keyframes.reduce((size, { config }) => {
        const template = config.path;

        reps.set(template, 1 + (0 | reps.get(template)));

        const numeral = reps.get(template).toString();

        return numeral.length > size ? numeral.length : size;
      }, padmin);

      reps.clear();

      await keyframes.reduce(async (pending, { config }) => {
        if (pending) await pending;

        const template = config.path;

        reps.set(template, 1 + (0 | reps.get(template)));

        const numeral = reps.get(template).toString();
        const count =
          new Array(numeral.length < padmax ? padmax - numeral.length : 0)
            .fill("0")
            .join("") + numeral;

        const prefix = template
          .replace(/\$\{\s*foldername\s*\}/g, path.basename(dirname))
          .replace(/\$\{\s*basename\s*\}/g, basename)
          .replace(/\$\{\s*filename\s*\}/g, filename)
          .replace(/\$\{\s*count\s*\}[^`]*/, "");

        const relname = template
          .replace(/\$\{\s*foldername\s*\}/g, path.basename(dirname))
          .replace(/\$\{\s*basename\s*\}/g, basename)
          .replace(/\$\{\s*filename\s*\}/g, filename)
          .replace(/\$\{\s*count\s*\}/g, count)
          .split(path.sep)
          .reduce((next, current, idx) => {
            next.push(
              current.replace(/\$\{\s*([1-9]\d*)\s*\}/g, (match, delta) => {
                return next[idx - Number(delta)];
              })
            );

            return next;
          }, [])
          .join(path.sep);

        const result = path.join(dst, relname);

        await new Promise(rv =>
          fs.mkdir(path.dirname(result), { recursive: true }, (...args) =>
            rv(args)
          )
        );

        const { lines, guides, ranges } = details.get(config);

        const [writeFileErr] = await new Promise(rv =>
          fs.writeFile(result, lines.join("\n"), (...args) => rv(args))
        );

        const output = {
          pathname: relname,
          focus: lines.length > 1 ? "1:" + lines.length : "1",
          context: config.context || null,
          guides,
          ranges
        };

        meta.byTemplate[template] = meta.byTemplate[template] || {
          template,
          prefix,
          outputs: []
        };
        meta.byTemplate[template].outputs.push(output);

        meta.byPrefix[prefix] = meta.byPrefix[prefix] || {
          prefix,
          outputs: []
        };
        meta.byPrefix[prefix].outputs.push(output);

        meta.all = meta.all || { outputs: [] };
        meta.all.outputs.push(output);
      }, null);

      if (prefs && prefs.digest) {
        await Promise.all(
          [
            ["all"],
            ...Object.keys(meta.byPrefix).map(prefix => ["byPrefix", prefix]),
            ...Object.keys(meta.byTemplate).map(template => [
              "byTemplate",
              template
            ])
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
                fs.mkdir(path.dirname(result), { recursive: true }, (...args) =>
                  rv(args)
                )
              );

              const [writeFileErr] = await new Promise(rv =>
                fs.writeFile(result, text, (...args) => rv(args))
              );
            }
          })
        );
      }

      console.log(pathname, keyframes.length);
    })
  );
}
