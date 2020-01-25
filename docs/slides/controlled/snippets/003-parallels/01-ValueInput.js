export default prefs.json`
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

export default keyframe.json`{
  "path": "./${foldername}/01-component/a-${basename}/01-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        [],
        ["turn"],
        ["decl", "expr"],
        [],
        ["curly"]
      ]
    }
  }
}
`;

export const ValueInput = () => { // ["decl", "const", "=>"], ["curly", "{"]
  return ( // ["turn", "turn"], ["expr", "("]
    <></>
  ); // ["expr", ")"]
  // render some JSX
}; // ["curly", "}"]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/02-render/a-${basename}/02-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = () => {
  return (
    <input>
    </input>
  );

};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  return (
    <input>
    </input>
  );
  // consume props
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    // retrieve non-callback props
  } = props;

  const {
    // retrieve callback props
  } = props;

  return (
    <input>
    </input>
  );

};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    // retrieve non-callback props
  } = props;

  return (
    <input>
    </input>
  );
  // consume props
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  return (
    <input>
    </input>
  );
  // consume props -- retrieve non-callback props
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  return (
    <input
      // pass props to children
    >
    </input>
  );
  // consume props 
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  return (
    <input
      value={value}
    >
    </input>
  );
  // consume props - pass props to children
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    // retrieve callback props
  } = props;

  return (
    <input
      value={value}
    >
    </input>
  );
  // consume props
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onChange = event => {}
  } = props;

  return (
    <input
      value={value}
    >
    </input>
  );
  // consume props -- retrieve callback props
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onChange = event => {}
  } = props;

  return (
    <input
      value={value}
      // pass props to children
      onChange={
        onChange
      }
    >
    </input>
  );
  // consume props
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onChange = event => {}
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

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a-${basename}/04-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onChange = event => {}
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
  const [value, setValue] = useState("default text");

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

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a-${basename}/04-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onChange = event => {}
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
  const [value, setValue] = useState("default text");

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

// code duplication burden
export const Lib = () => {
  const [value, setValue] = useState("placeholder");

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

export default null;
