// #lang scribble/text
// @(require json)
// @(define (mapValues values fn) (map fn values))
// @(define (process dir file)
//    (let ([vals (hash-ref
//                    (call-with-input-file file read-json)
//                    'outputs)])
//      (flatten
//       (mapValues vals
//                 (lambda (output)
//                   (let ([pathname (hash-ref output 'path)]
//                         [column (if (hash-has-key? output 'column)
//                                     (hash-ref output 'column)
//                                     0)]
//                         [review (hash-ref
//                                  (hash-ref
//                                   (hash-ref
//                                    output
//                                    'context)
//                                   'code)
//                                  'review)])
//                     (mapValues review
//                                (lambda (highlights)
//                                  (let ([foci (if (eq? 'null highlights)
//                                                  (hash-ref output 'focus)
//                                                  (if (= 0 (length highlights))
//                                                      ""
//                                                      (string-join
//                                                       (filter
//                                                        (lambda (focus) (0 . < . (string-length focus)))
//                                                        (mapValues highlights
//                                                                   (lambda (label)
//                                                                     (string-join
//                                                                      (append (if (hash-has-key?
//                                                                                   (hash-ref output 'ranges)
//                                                                                   (string->symbol label))
//                                                                                  (list (hash-ref
//                                                                                         (hash-ref
//                                                                                          (hash-ref output 'ranges)
//                                                                                          (string->symbol label)
//                                                                                          )
//                                                                                         'focus))
//                                                                                  '())
//                                                                              (if (hash-has-key?
//                                                                                   (hash-ref output 'guides)
//                                                                                   (string->symbol label))
//                                                                                  (list (hash-ref
//                                                                                         (hash-ref
//                                                                                          (hash-ref output 'guides)
//                                                                                          (string->symbol label)
//                                                                                          )
//                                                                                         'focus))
//                                                                                  '()))
//                                                                      ","))))
//                                                       ",")
//                                                      ))])
//                                    (vector dir pathname foci column))))))
// @(define (stepper columns dir file)
//    (map (lambda (output)
//           (let (
//                 [pathname (hash-ref output 'path)]
//                 [foci (map (lambda (highlights)
//                             (if
//                              (eq? 'null highlights)
//                              (hash-ref output 'focus)
//                              (if
//                               (= 0 (length highlights))
//                               ""
//                               (string-join
//                                (filter
//                                 (lambda (focus) (0 . < . (string-length focus)))
//                                 (map
//                                  (lambda (label)
//                                    (string-join
//                                     (append
//                                      (if (hash-has-key?
//                                            (hash-ref output 'ranges)
//                                            (string->symbol label))
//                                          (list (hash-ref
//                                                  (hash-ref
//                                                    (hash-ref output 'ranges)
//                                                    (string->symbol label)
//                                                    )
//                                                  'focus))
//                                          '())
//                                      (if (hash-has-key?
//                                            (hash-ref output 'guides)
//                                            (string->symbol label))
//                                          (list (hash-ref
//                                                  (hash-ref
//                                                    (hash-ref output 'guides)
//                                                    (string->symbol label)
//                                                    )
//                                                  'focus))
//                                          '()))
//                                     ","))
//                                  highlights))
//                                ",")
//                                ))
//                              )
//                            (hash-ref
//                             (hash-ref
//                              (hash-ref output 'context)
//                              'code)
//                             'review))]
//                 )
//             (add-newlines
//              (map
//               (lambda (focus)
//                 @list{@"\n<Step>\n\n```js" @|focus| file=@|dir|@|pathname|@"\n```\n\n</Step>\n"})
//               foci)
//              )
//             ))
//         (hash-ref
//          (call-with-input-file file read-json)
//          'outputs)))

const path = require("path");

const js = String.raw;
const mdx = String.raw;

const associateStep = (labels, output) => {
  const { pathname, focus, context } = output;
  const column = context.column ? context.column.toString() : "";
  const group = path.dirname(pathname);

  if (!Array.isArray(labels)) {
    return { column, group, pathname, focus };
  }

  if (!labels.length) {
    return { column, group, pathname, focus: "" };
  }

  return { column, group, pathname, focus: labels.map(foci).join("").slice(1) };

  function foci(name) {
    const { guides, ranges } = output;

    return [
      guides[name] ? "," + guides[name].focus : "",
      ranges[name] ? "," + ranges[name].focus : "",
    ].join("");
  }
};

const stepper = ({ folder, digest }) => {
  const { outputs } = digest;

  const list = [].concat(...outputs.map(
    value => value.context.code.review.map(
      labels => associateStep(labels, value)
    )
  ));

  const table = [...list.reduce((result, step) => {
    const name = step.column;
    const label = step.group;
    const groups = result.get(name) || result.set(name, new Map()).get(name);
    const values = groups.get(label) || groups.set(label, []).get(label);

    values.push(Object.assign({ folder }, step));

    return result;
  }, new Map())].map(([name, groups]) => {
    return [name, [...groups]];
  });

  const limit = table.reduce((max, [name, groups]) => {
    return max > groups.length ? max : groups.length;
  }, 0);

  const columns = new Map();

  let at = 0;
  do {
    let max = 0;
    for (let idx = 0; idx < table.length; idx += 1) {
      const [name, groups] = table[idx];
      const count = groups.length > at ? groups[at][1].length : 0;

      max = max > count ? max : count;

      // TODO: refactor to use "keys" instead of indexes
      // (the code is pretty unreadable...)
      groups.push([
        groups[groups.length - 1][0], // label
        groups[groups.length - 1][1].slice(-1) // steps
      ]);
    }

    for (let idx = 0; idx < table.length; idx += 1) {
      const [name, groups] = table[idx];
      const steps = columns.get(name) || columns.set(name, []).get(name);
      const [label, vals] =
        groups.length > at ? groups[at] : groups[groups.length - 1];

      for (let offset = 0; offset < max; offset += 1) {
        steps.push(vals.length > offset ? vals[offset] : vals[vals.length - 1]);
      }
    }

    at += 1;
  } while (at < limit);

  const pillars = [...columns];

  return pillars[0][1].map((vals, idx) => {
    return mdx`
<Step>

${
pillars.map(([label, steps]) => {
  const value = steps[idx];
  const file = path.join(value.folder, value.pathname);
  return "```js "+value.focus+" file=./"+file+"\n```";
}).join("\n\n")
}

</Step>
`;
  }).join("\n\n");
};

module.exports = () => mdx`
import {
  CodeSurfer,
  CodeSurferColumns,
  Step,
} from "code-surfer";
import { nightOwl, vsDark } from "@code-surfer/themes";

export const theme = vsDark;

# The Tricky Brilliance of
# Uncontrolled ${"`"}<input />${"`"}s

---

<CodeSurferColumns themes={[vsDark]}>

${
  stepper({
    folder: "./keyframes/",
    digest: require(path.join(__dirname, "./keyframes/002-structure/01-ValueInput.json"))
  })
}

</CodeSurferColumns>

---

<CodeSurferColumns themes={[vsDark, nightOwl]}>

${
  stepper({
    folder: "./keyframes/",
    digest: require(path.join(__dirname, "./keyframes/003-compare/02-LineItem.json"))
  })
}

</CodeSurferColumns>

---

<CodeSurferColumns themes={[vsDark, nightOwl]}>

${
  stepper({
    folder: "./keyframes/",
    digest: require(path.join(__dirname, "./keyframes/004-refactor/02-LineItem.json"))
  })
}

</CodeSurferColumns>

---

<CodeSurferColumns themes={[vsDark, nightOwl]}>

${
  stepper({
    folder: "./keyframes/",
    digest: require(path.join(__dirname, "./keyframes/005-conform/02-LineItem.json"))
  })
}

</CodeSurferColumns>

---

docs:  
[codesurfer.pomb.us](https://codesurfer.pomb.us)

---

<CodeSurfer>

${"`"}${"`"}${"`"}js title="This is a title" subtitle="and this a subtitle"${js`
function lorem(ipsum, dolor = 1) {
  const sit = ipsum == null ? 0 : ipsum.sit;
  dolor = sit - amet(dolor);
  return sit
  ? consectetur(ipsum, 0, dolor < 0 ? 0 : dolor)
  : [];
}

function incididunt(ipsum, ut = 1) {
  ut = labore.et(amet(ut), 0);
  const sit = ipsum == null ? 0 : ipsum.sit;
  
  if (!sit || ut < 1) {
    return [];
  }
  
  let dolore = 0;
  let magna = 0;
  const aliqua = new eiusmod(labore.ut(sit / ut));
  
  while (dolore < sit) {
    aliqua[magna++] = consectetur(
      ipsum,
      dolore,
      (dolore += ut)
    );
  }

  return aliqua;
}
`}${"`"}${"`"}${"`"}

${"`"}${"`"}${"`"}js${js`
function lorem(ipsum, dolor = 1) {
  const sit = ipsum == null ? 0 : ipsum.sit;
dolor = sit - amet(dolor);
return sit
? consectetur(ipsum, 0, dolor < 0 ? 0 : dolor)
: [];
}

function adipiscing(...elit) {
  if (!elit.sit) {
return [];
}

const sed = elit[0];
return eiusmod.tempor(sed) ? sed : [sed];
}

function incididunt(ipsum, ut = 1) {
  ut = labore.et(amet(ut), 0);
  const sit = ipsum == null ? 0 : ipsum.sit;
  
  if (!sit || ut < 1) {
    return [];
}

let dolore = 0;
let magna = 0;
const aliqua = new eiusmod(labore.ut(sit / ut));

while (dolore < sit) {
  aliqua[magna++] = consectetur(
    ipsum,
    dolore,
    (dolore += ut)
    );
  }
  
  return aliqua;
}
`}
${"`"}${"`"}${"`"}

${"`"}${"`"}${"`"}diff 1[10:14],2[15:19],3[22:27],10:12

${"`"}${"`"}${"`"}

</CodeSurfer>
`;
