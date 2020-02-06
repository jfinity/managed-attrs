export default prefs/*json*/`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
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

    onChange = string => {}, // setValue // [null, "direct"]
  } = props;

  const handleChange = event => onChange(
    event.target.value
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
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



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted // [null, "direct"]
    onMouseLeave = boolean => {}, // setHighlighted // [null, "direct"]

    onClick = () => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    true
  );
  const handleMouseLeave = () => onMouseLeave(
    false
  );

  const handleClick = () => onClick();

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Updaters are (optionally) functions from prior state to next state",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
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

    onChange = updater => {}, // setState // [null, ""]
  } = props;

  const handleChange = event => onChange(
    event.target.value // [null, "direct"]
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Updaters are (optionally) functions from prior state to next state",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci", "note", "direct", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = updater => {}, // setState // [null, ""]
    onMouseLeave = updater => {}, // setState // [null, ""]

    onClick = () => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    true // [null, "direct"]
  );
  const handleMouseLeave = () => onMouseLeave(
    false // [null, "direct"]
  );

  const handleClick = () => onClick();

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Updaters are (optionally) functions from prior state to next state",
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

    onChange = updater => {}, // setState
  } = props;

  const handleChange = event => onChange(
    // Please hold your event.persist() critiques for now... // [""]
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    } // [""]
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Updaters are (optionally) functions from prior state to next state",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = updater => {}, // setState
    onMouseLeave = updater => {}, // setState

    onClick = () => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    state => { // [null, ""]
      const next = true; // [null, ""]
      return { ...state, highlighted: next }; // [null, ""]
    } // [null, ""]
  );
  const handleMouseLeave = () => onMouseLeave(
    state => { // [null, ""]
      const next = false; // [null, ""]
      return { ...state, highlighted: next }; // [null, ""]
    } // [null, ""]
  );

  const handleClick = () => onClick();

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Sacrificed introspection and dynamic interpretation capabilities",
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

    onChange = updater => {}, // setState // ["direct"]
  } = props;

  const handleChange = event => onChange( // ["pin"]
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  ); // ["pin"]

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Sacrificed introspection and dynamic interpretation capabilities",
     "column": "BasicButton",
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



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = updater => {}, // setState // ["direct"]
    onMouseLeave = updater => {}, // setState // ["direct"]

    onClick = () => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter( // ["pin"]
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(); // ["pin"]

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
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

    onChange = (action, updater) => {}, // [""]
  } = props;

  const handleChange = event => onChange( // [null, "direct"]
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  ); // [null, "direct"]

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
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



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {}, // [""]
    onMouseLeave = (action, updater) => {}, // [""]

    onClick = () => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter( // [null, "direct"]
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  ); // [null, "direct"]
  const handleMouseLeave = () => onMouseLeave( // [null, "direct"]
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  ); // [null, "direct"]

  const handleClick = () => onClick();

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]

export const ValueInput = props => {
  const {
    value = "",

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange( // [null, "pin"]
    { type: "onChange", value: event.target.value }, // [""]
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  ); // [null, "pin"]

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
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



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = () => {}, // [null, "direct"]
  } = props;

  const handleMouseEnter = () => onMouseEnter( // [null, "pin"]
    { type: "onMouseEnter", hovering: true }, // [null, ""]
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  ); // [null, "pin"]
  const handleMouseLeave = () => onMouseLeave( // [null, "pin"]
    { type: "onMouseLeave", hovering: false }, // [null, ""]
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  ); // [null, "pin"]

  const handleClick = () => onClick(); // [null, "direct"]

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]

export const ValueInput = props => {
  const {
    value = "",

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange( // [null, "pin"]
    { type: "onChange", value: event.target.value }, // [""]
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  ); // [null, "pin"]

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {}, // [null, ""]
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(); // [null, "pin"]

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci"],
        ["f2f"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]

export const ValueInput = props => {
  const {
    value = "",

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange( // [null, "pin"]
    { type: "onChange", value: event.target.value }, // [""]
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  ); // [null, "pin"]

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["f2f"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {}, // [null, "pin"]
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick( // [""]
    { type: "onClick" }
  ); // [""]

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["f2f"],
        ["foci", "note", "direct"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { value: "default text" }
  );

  return (
    <ValueInput
      {...state}
      onChange={setState} // [null, "direct"]
    >
    </ValueInput>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
     "code": {
      "review": [
        ["f2f"],
        ["foci", "note", "direct"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { highlighted: false }
  );

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState} // [null, "direct"]
      onMouseLeave={setState} // [null, "direct"]
    >
      Accept
    </BasicButton>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
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

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { value: "default text" }
  );

  const manageState = (action, updater) => { // [""]
  }; // [""]

  return (
    <ValueInput
      {...state}
      onChange={setState} // [null, "pin"]
    >
    </ValueInput>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { highlighted: false }
  );

  const manageState = (action, updater) => { // [""]
  }; // [""]

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState} // [null, "pin"]
      onMouseLeave={setState} // [null, "pin"]
    >
      Accept
    </BasicButton>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
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

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { value: "default text" }
  );

  const manageState = (action, updater) => { // [""]
    setState(lastState => {
      const nextState = lastState;
      return nextState;
    });
  }; // [""]

  return (
    <ValueInput
      {...state}
      onChange={setState} // [null, "pin"]
    >
    </ValueInput>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { highlighted: false }
  );

  const manageState = (action, updater) => { // [""]
    setState(lastState => {
      const nextState = lastState;
      return nextState;
    });
  }; // [""]

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState} // [null, "pin"]
      onMouseLeave={setState} // [null, "pin"]
    >
      Accept
    </BasicButton>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci", "direct1", "direct2", "direct3", "direct4"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { value: "default text" }
  );

  const manageState = (action, updater) => { // [""], ["direct1", "action, updater"]
    setState(lastState => {
      const nextState = updater(lastState); // ["direct3", "updater(lastState)"]
      return nextState;
    });
  }; // [""]

  return (
    <ValueInput
      {...state}
      onChange={setState} // [null, "pin"]
    >
    </ValueInput>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci", "direct1", "direct2", "direct3", "direct4"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { highlighted: false }
  );

  const manageState = (action, updater) => { // [""], ["direct1", "action, updater"]
    setState(lastState => {
      const nextState = updater(lastState); // ["direct3", "updater(lastState)"]
      return nextState;
    });
  }; // [""]

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState} // [null, "pin"]
      onMouseLeave={setState} // [null, "pin"]
    >
      Accept
    </BasicButton>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Reducers produce a next state from a prior state and an action",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "direct1", "direct2", "direct3", "direct4"],
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { value: "default text" }
  );

  const manageState = (action, reducer) => { // [""], ["direct1", "reducer"]
    setState(lastState => {
      const nextState = reducer(lastState, action); // ["direct3", "reducer(", ")"]
      return nextState;
    });
  }; // [""]

  return (
    <ValueInput
      {...state}
      onChange={setState} // [null, "pin"]
    >
    </ValueInput>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Reducers produce a next state from a prior state and an action",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "direct1", "direct2", "direct3", "direct4"],
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { highlighted: false }
  );

  const manageState = (action, reducer) => { // [""], ["direct1", "reducer"]
    setState(lastState => {
      const nextState = reducer(lastState, action); // ["direct3", "reducer(", ")"]
      return nextState;
    });
  }; // [""]

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState} // [null, "pin"]
      onMouseLeave={setState} // [null, "pin"]
    >
      Accept
    </BasicButton>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Reducers produce a next state from a prior state and an action",
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

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { value: "default text" }
  );

  const manageState = (action, reducer) => { // [""]
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  }; // [""]

  return (
    <ValueInput
      {...state}
      onChange={setState} // [null, "pin"]
    >
    </ValueInput>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Reducers produce a next state from a prior state and an action",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [state, setState] = useState(
    { highlighted: false }
  );

  const manageState = (action, reducer) => { // [""]
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  }; // [""]

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState} // [null, "pin"]
      onMouseLeave={setState} // [null, "pin"]
    >
      Accept
    </BasicButton>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "manageState() is sufficient to fulfill any component callback",
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


export const ValueInput = props => {
  const {
    value = "",

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => { // [null, "direct"]
  const [state, setState] = useState( // ["direct"]
    { value: "default text" }
  );

  const manageState = (action, reducer) => { // ["pin"]
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  }; // ["pin"], ["direct"]

  return (
    <ValueInput
      {...state}
      onChange={manageState} // [null, ""]
    >
    </ValueInput>
  );
}; // [null, "direct"]

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "manageState() is sufficient to fulfill any component callback",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci", "note", "direct"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const App = () => { // [null, "direct"]
  const [state, setState] = useState( // ["direct"]
    { highlighted: false }
  );

  const manageState = (action, reducer) => { // ["pin"]
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  }; // ["pin"], ["direct"]

  return (
    <BasicButton
      {...state}
      onMouseEnter={manageState} // [null, ""]
      onMouseLeave={manageState} // [null, ""]
    >
      Accept
    </BasicButton>
  );
}; // [null, "direct"]

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
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


export const ValueInput = props => {
  const {
    value = "",

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const useManagedState = initialState => { // [""], ["direct", "initialState"]
  const [state, setState] = useState(
    { value: "default text" } // [null, "direct"]
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };
}; // [""]

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci", "note", "direct"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const useManagedState = initialState => { // [""], ["direct", "initialState"]
  const [state, setState] = useState(
    { highlighted: false } // [null, "direct"]
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };
}; // [""]

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
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

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const useManagedState = initialState => { // ["pin", "initialState"]
  const [state, setState] = useState(
    initialState // [null, ""]
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const useManagedState = initialState => { // ["pin", "initialState"]
  const [state, setState] = useState(
    initialState // [null, ""]
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
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

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );
  // useCallback() // [null, ""]
  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );
  // useCallback() // [null, ""]
  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
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

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]
export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );
  // useCallback()
  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState]; // [null, ""]
};

// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]
export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState]; // [null, ""]
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
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


export const ValueInput = props => {
  const {
    value = "",

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]



export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );
  // useCallback()
  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState];
};

export const App = () => { // ["pin"]
  const [state, setState] = useState( // ["direct"]
    { value: "default text" }
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  }; // ["direct"]

  return (
    <ValueInput
      {...state}
      onChange={manageState}
    >
    </ValueInput>
  );
}; // ["pin"]
// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci", "note", "direct"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]



export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState];
};

export const App = () => { // ["pin"]
  const [state, setState] = useState( // ["direct"]
    { highlighted: false }
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  }; // ["direct"]

  return (
    <BasicButton
      {...state}
      onMouseEnter={manageState}
      onMouseLeave={manageState}
    >
      Accept
    </BasicButton>
  );
}; // ["pin"]
// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
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

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]



export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );
  // useCallback()
  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState];
};

export const App = () => {
  const [state, manageState] = useManagedState( // [""]
    { value: "default text" } // ["pin"]
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  }; // ["pin"]

  return (
    <ValueInput
      {...state}
      onChange={manageState}
    >
    </ValueInput>
  );
};
// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]



export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState];
};

export const App = () => {
  const [state, manageState] = useManagedState( // [""]
    { highlighted: false } // ["pin"]
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  }; // ["pin"]

  return (
    <BasicButton
      {...state}
      onMouseEnter={manageState}
      onMouseLeave={manageState}
    >
      Accept
    </BasicButton>
  );
};
// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
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

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};
// [null, "foci"], "start", ["f2f"]



export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );
  // useCallback()
  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState];
};

export const App = () => {
  const [state, manageState] = useManagedState( // ["pin"]
    { value: "default text" }
  ); // ["pin"]

  return (
    <ValueInput
      {...state}
      onChange={manageState}
    >
    </ValueInput>
  );
};
// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Extract the pattern into a custom hook",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start", ["f2f"]



export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState];
};

export const App = () => {
  const [state, manageState] = useManagedState( // ["pin"]
    { highlighted: false }
  ); // ["pin"]

  return (
    <BasicButton
      {...state}
      onMouseEnter={manageState}
      onMouseLeave={manageState}
    >
      Accept
    </BasicButton>
  );
};
// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
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

    onChange = (action, updater) => {},
  } = props;

  const handleChange = event => onChange(
    { type: "onChange", value: event.target.value },
    state => {
      const next = event.target.value;
      return { ...state, value: next };
    }
  );

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );
};

export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );
  // useCallback()
  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState];
};
// [null, "foci"], "start", ["f2f"]



export const App = () => {
  const [state, manageState] = useManagedState(
    { value: "default text" }
  );

  return (
    <ValueInput
      {...state}
      onChange={manageState}
    >
    </ValueInput>
  );
};

export const Lib = () => { // [""]
  const [state, manageState] = useManagedState(
    { value: "placeholder" }
  );

  return (
    <ValueInput
      {...state}
      onChange={manageState}
    >
    </ValueInput>
  );
}; // [""]


// [null, "foci"], "end", ["f2f"]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = (action, updater) => {},
    onMouseLeave = (action, updater) => {},

    onClick = action => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(
    { type: "onMouseEnter", hovering: true },
    state => {
      const next = true;
      return { ...state, highlighted: next };
    }
  );
  const handleMouseLeave = () => onMouseLeave(
    { type: "onMouseLeave", hovering: false },
    state => {
      const next = false;
      return { ...state, highlighted: next };
    }
  );

  const handleClick = () => onClick(
    { type: "onClick" }
  );

  return (
    <button
      style={highlighted ? { background: "lightgray" } : {}}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export const useManagedState = initialState => {
  const [state, setState] = useState(
    initialState
  );

  const manageState = (action, reducer) => {
    if (typeof reducer !== "function") return;

    setState(lastState => {
      const nextState = reducer(lastState, action);
      return nextState;
    });
  };

  return [state, manageState];
};
// [null, "foci"], "start", ["f2f"]



export const App = () => {
  const [state, manageState] = useManagedState(
    { highlighted: false }
  );

  return (
    <BasicButton
      {...state}
      onMouseEnter={manageState}
      onMouseLeave={manageState}
    >
      Accept
    </BasicButton>
  );
};

export const Lib = () => { // [""]
  const [state, manageState] = useManagedState(
    {}
  );

  return (
    <BasicButton
      {...state}
      onMouseEnter={manageState}
      onMouseLeave={manageState}
    >
      Clickbait
    </BasicButton>
  );
}; // [""]


// [null, "foci"], "end", ["f2f"]
export default null;









// decodeURI/encodeURI
