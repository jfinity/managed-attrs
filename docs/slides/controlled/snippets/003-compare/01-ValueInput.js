export default prefs/*json*/`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default skip/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["f2f"]
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
// [null, "foci"], "start", ["f2f"]


export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value}

      onChange={
        event => setValue(event.target.value) // [null, "duped"]
      }
    >
    </ValueInput>
  );
};


// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Reuse component",
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
// [null, "foci"], "start", ["f2f"]



export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value}

      onChange={
        event => setValue(event.target.value) // [null, "duped"]
      }
    >
    </ValueInput>
  );
};

export const Lib = () => { // [""]
  const [value, setValue] = useState(
    "placeholder"
  );

  return (
    <ValueInput
      value={value}

      onChange={
        event => setValue(event.target.value) // [null, "duped"]
      }
    >
    </ValueInput>
  );
}; // [""]


// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Code duplication and logic proliferation burden",
     "column": "ValueInput",
     "code": {
      "review": [
        ["duped", "direct"]
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
// [null, "foci"], "start", ["f2f"]



export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );
// [null, "direct"]
  return (
    <ValueInput
      value={value}

      onChange={
        event => setValue(event.target.value) // [null, "duped"]
      }
    >
    </ValueInput>
  );
};

export const Lib = () => {
  const [value, setValue] = useState(
    "placeholder"
  );

  return (
    <ValueInput
      value={value}

      onChange={
        event => setValue(event.target.value) // [null, "duped"]
      }
    >
    </ValueInput>
  ); // ["direct", " "]
};


// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["note", "", "pin", "direct"],
        ["f2f"]
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
// [null, "foci"], "start", ["f2f"]



export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );
// [null, "direct"]
  return (
    <ValueInput
      value={value}

      onChange={
        setValue // [null, ""]
      }
    >
    </ValueInput>
  );
};

export const Lib = () => {
  const [value, setValue] = useState(
    "placeholder"
  );

  return (
    <ValueInput
      value={value}

      onChange={
        setValue // [null, ""]
      }
    >
    </ValueInput>
  ); // ["direct", " "]
};


// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Refactor component",
     "column": "ValueInput",
     "code": {
      "review": [
        ["f2f"],
        ["foci", "note", "direct", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]


export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {}, // [null, "direct"]
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


// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Refactor component",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]


export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {}, // [null, ""]
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


// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Adapt signature from callback to state manager",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci", "note", "direct"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]


export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {}, // [null, "pin"]
  } = props;

  return (
    <input
      value={value}

      onChange={ // ["direct"]
        onChange
      } // ["direct"]
    >
    </input>
  );
};


// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Adapters bridge the gaps between dissimilar APIs",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "direct", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]


export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {},
  } = props;

  const handleChange = event => onChange( // [null, "pin"]
    event.target.value // [null, "pin"]
  ); // [null, "pin"]

  return (
    <input
      value={value}

      onChange={ // ["direct"]
        onChange
      } // ["direct"]
    >
    </input>
  );
};


// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "direct", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]


export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {},
  } = props;

  const handleChange = event => onChange( // [null, "pin"]
    event.target.value // [null, "pin"]
  ); // [null, "pin"]

  return (
    <input
      value={value}

      onChange={ // ["direct"]
        handleChange
      } // ["direct"]
    >
    </input>
  );
};


// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/05-consumer/a/005-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Different component with same structure",
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


