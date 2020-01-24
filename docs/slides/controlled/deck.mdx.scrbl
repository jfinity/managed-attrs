#lang scribble/text
@(require json)
@(define (stepper dir file)
   (map (lambda (pathname)
          @list{@"\n```js file="@|dir|@|pathname|@"\n```\n"}
          )
        (hash-ref
         (call-with-input-file file read-json)
         'paths)))
import {
  CodeSurfer,
  CodeSurferColumns,
  Step,
} from "code-surfer";
import { nightOwl, vsDark } from @"'@code-surfer/themes'";

export const theme = vsDark;

# The Tricky Brilliance of
# Uncontrolled `<input />`s

---

<CodeSurfer>
@stepper["./codegen/"]{./docs/slides/controlled/codegen/003-parallels/01-ValueInput.json}
</CodeSurfer>

---

docs:  
[codesurfer.pomb.us](https://codesurfer.pomb.us)

---

<CodeSurfer>

```js title="This is a title" subtitle="and this a subtitle"
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
```

```js
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
```

```diff 1[10:14],2[15:19],3[22:27],10:12

```

</CodeSurfer>
