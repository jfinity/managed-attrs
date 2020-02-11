const path = require("path");

const js = String.raw;
const mdx = String.raw;

const associateStep = (labels, output) => {
  const { pathname, focus, context } = output;
  const { title = "", subtitle = "" } = context;
  const column = context.column ? context.column.toString() : "";
  const group = path.dirname(pathname);

  if (!Array.isArray(labels)) {
    return { column, group, pathname, title, subtitle, focus };
  }

  if (!labels.length) {
    return { column, group, pathname, title, subtitle, focus: "" };
  }

  const targets = labels.map(foci).join("").slice(1);

  return { column, group, pathname, title, subtitle, focus: targets };

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
    let props = "";
    const title = pillars.find(([label, steps]) => steps[idx].title);
    const subtitle = pillars.find(([label, steps]) => steps[idx].subtitle);

    props += title ? ' title="'+title[1][idx].title+'"' : "";
    props += subtitle ? ' subtitle="'+subtitle[1][idx].subtitle+'"' : "";

    return mdx`
<Step${props}>

${
pillars.map(([label, steps]) => {
  const value = steps[idx];
  const file = " file=./"+path.join(value.folder, value.pathname);
  return "```js "+value.focus+file+"\n```";
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
import { theme1, theme2 } from "./custom-theme";
import { InputDemo, ButtonDemo, FieldDemo } from "./widgets";

export const theme = theme1;

# The Tricky Brilliance of
# Uncontrolled ${"`"}<input />${"`"}s

---

<InputDemo />

---

<CodeSurferColumns themes={[theme1]}>

${
  stepper({
    folder: "./keyframes/",
    digest: require(path.join(__dirname, "./keyframes/002-structure/01-ValueInput.json"))
  })
}

${
  stepper({
    folder: "./keyframes/",
    digest: require(path.join(__dirname, "./keyframes/003-compare/01-ValueInput.json"))
  })
}

</CodeSurferColumns>

---

<ButtonDemo>Accept</ButtonDemo>

---

<CodeSurferColumns themes={[theme2, theme1]} sizes={[5, 7]}>

${
  stepper({
    folder: "./keyframes/",
    digest: require(path.join(__dirname, "./keyframes/003-compare/02-BasicButton.json"))
  })
}

${
  stepper({
    folder: "./keyframes/",
    digest: require(path.join(__dirname, "./keyframes/004-refactor/02-BasicButton.json"))
  })
}

</CodeSurferColumns>

---

<FieldDemo />

---

<CodeSurferColumns themes={[theme1]}>

${
  stepper({
    folder: "./keyframes/",
    digest: require(path.join(__dirname, "./keyframes/004-refactor/03-CodecField.json"))
  })
}

</CodeSurferColumns>

---


<CodeSurferColumns themes={[theme1, theme2]} sizes={[7, 5]}>

<Step>

${"```"}md title="Benefits"

* Flexible and fully controlled
* Consistent and uniform API
* Easy to consume

${"```"}

${"```"}md title="Drawbacks"

- More involved to produce
- Unfamiliar pattern
- Lots of room for improvement

${"```"}

</Step>

</CodeSurferColumns>

---

# Future work

* More ergonomic (lazy) composition
* Async side-effects with saga argument
* Integration with statecharts
  * (or some other visualizable state model)

---

# Questions?

---

`;
