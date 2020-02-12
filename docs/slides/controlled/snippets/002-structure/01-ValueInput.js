export default prefs/* json */`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;

// use line comments -- parsable as JSON -- for labelled selections
// remove label comments and trim any whitespace before as post-processing

// first (start) label matches indexOf (scoped to line)
// ["whatever", "indexOf"]
// ["whatever", "lastIndexOf"]
// second (end) label matches lastIndexOf (scoped to line)

// omitting matchers matches the whole line
// ["whatever"]
// ["whatever", ""]
// this is the same behavior as matching empty string ("")

// labels be "self-selecting" by specifying indexOf and lastIndexOf matchers
// ["something", "indexOf", "lastIndexOf"]
// if the lastIndexOf matches before the indexOf, the line contains no match...

// if both matchers are provided and one is null, the other is a complete match
// ["something", "indexOf complete match", null]
// ["something", null, "lastIndexOf complete match"]

// lines can have multiple labels
// ["whatever", "matcher"], ["something", "matcher", "matcher"]
// the text subsequent the last "//" will be wrapped in "["/"]" before parsing

// label matchers can be string literals or a triple of strings
// ["whatever", ["prefix", "infix", "suffix"]]
// start labels will omit the prefix from selections and end labels the suffix

// self-selecting complete matchers will omit both the prefix and suffix
// ["something", "indexOf complete match", null]
// ["something", null, "lastIndexOf complete match"]

// if a label has no pair, it becomes self-selecting and its matcher complete
// ["something", "indexOf complete match"]
// ["something"]
// if a label has no pair and no matcher, it self-selects the complete line

// [label, start, end, after]
// [range || loop]

/* json */`{
  "path": "./${foldername}/01-component/a/01-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        [],
        ["turn"],
        ["decl", "expr"],
        [],
        ["curly"],
        [""],
      ]
    }
  }
}
`;

// [null, "", "decl"]
export const ValueInput = () => { // ["decl", "const", "=>"], ["curly", "{"]
  return ( // ["turn", "turn"], ["expr", "("]
    <></>
  ); // ["expr", ")"]
  // render some JSX
}; // ["curly", "}"]
// [null, "", "expr"]

null;





export default keyframe/*json*/`{
  "path": "./${foldername}/01-component/a/01-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Declare functional component",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/01-component/a/01-${1}-${count}-01-ValueInput.js",
  "context": {
    "title": "Declare functional component",
    "column": "ValueInput",
    "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", [""]

export const ValueInput = props => {
};

// [null, "foci"], "end", [""]
export default null;





export default keyframe/*json*/`{
  "path": "./${foldername}/02-render/a/02-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Render some JSX",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const ValueInput = props => {
  return ( // [""]
    <input>
    </input>
  ); // [""]
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Consume props",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const ValueInput = props => {
  const { // [""]
  } = props; // [""]

  return (
    <input>
    </input>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Retrieve non-callback props",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const ValueInput = props => {
  const {
    value = "", // [""]
  } = props;

  return (
    <input>
    </input>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Pass props to children",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const ValueInput = props => {
  const {
    value = "",
  } = props;

  return (
    <input
      value={value} // [""]
    >
    </input>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Retrieve callback props",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const ValueInput = props => {
  const { // ["pin"]
    value = "",
  } = props; // ["pin"]

  return (
    <input
      value={value}
    >
    </input>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Retrieve callback props",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {}, // [""]
  } = props;

  return (
    <input
      value={value}
    >
    </input>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Listen for child events",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={ // [""]
        onChange
      } // [""]
    >
    </input>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        null
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Consume the component",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};
// [null, "foci"], "start", [""]
export const App = () => {
};

// [null, "foci"], "end", [""]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Render the component",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};
// [null, "foci"], "start"
export const App = () => {
  return ( // [""]
    <ValueInput
    >
    </ValueInput>
  ); // [""]
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Pass props to the component",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};
// [null, "foci"], "start"
export const App = () => {
  return (
    <ValueInput // [""]
    > // [""]
    </ValueInput>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Pass props to the component",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};
// [null, "foci"], "start"
export const App = () => {
  const [value, setValue] = useState( // [""]
    "default text"
  ); // [""]

  return (
    <ValueInput // ["pin"]
    > // ["pin"]
    </ValueInput>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Pass props to the component",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};
// [null, "foci"], "start"
export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value} // [""]

      onChange={
      } // [""]
    >
    </ValueInput>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Adapt signature from callback to state manager",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};
// [null, "foci"], "start"
export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value}

      onChange={ // ["pin"]
      } // ["pin"]
    >
    </ValueInput>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Adapters bridge the gaps between dissimilar APIs",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};
// [null, "foci"], "start"
export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value}

      onChange={
        event => setValue(event.target.value) // [""]
      }
    >
    </ValueInput>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/b/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};
// [null, "foci"], "start", [""]
export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value}

      onChange={
        event => setValue(event.target.value)
      }
    >
    </ValueInput>
  );
};

// [null, "foci"], "end", [""]
export default null;



export default skip/*json*/`{
  "path": "./${foldername}/04-consumer/b/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", [""]

export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};

export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value}

      onChange={
        event => setValue(event.target.value)
      }
    >
    </ValueInput>
  );
};

// [null, "foci"], "end", [""]
export default null;
