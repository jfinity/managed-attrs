export default prefs/*json*/`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe/*json*/`{
  "path": "./${foldername}/01-component/a/01-${1}-${count}-01-ValueInput.js",
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

export default keyframe/*json*/`{
  "path": "./${foldername}/01-component/a/01-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Different component with same structure",
     "column": "BasicButton",
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
  "path": "./${foldername}/01-component/a/01-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Declare functional component",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", [""]

export const BasicButton = props => {
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
  "path": "./${foldername}/02-render/a/02-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Render some JSX",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const BasicButton = props => {
  return ( // [""]
    <button>
    </button>
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
  "path": "./${foldername}/03-props/a/03-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Consume props",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const BasicButton = props => {
  const { // [""]
  } = props; // [""]

  return (
    <button>
    </button>
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
  "path": "./${foldername}/03-props/a/03-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Retrieve non-callback props",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const BasicButton = props => {
  const {
    children = "\u00A0", // [""]

    highlighted = false, // [""]
  } = props;

  return (
    <button>
    </button>
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
  "path": "./${foldername}/03-props/a/03-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Pass props to children",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,
  } = props;

  return (
    <button
      style={highlighted && { background: "lightgray" }} // [""]
    >
      {children} // [null, ""]
    </button>
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
  "path": "./${foldername}/03-props/a/03-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Retrieve callback props",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const BasicButton = props => {
  const { // ["pin"]
    children = "\u00A0",

    highlighted = false,
  } = props; // ["pin"]

  return (
    <button
      style={highlighted && { background: "lightgray" }}
    >
      {children}
    </button>
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

    onChange = string => {}, // setValue // [""]
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
  "path": "./${foldername}/03-props/a/03-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Retrieve callback props",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted // [""]
    onMouseLeave = boolean => {}, // setHighlighted

    onClick = () => {}, // [""]
  } = props;

  return (
    <button
      style={highlighted && { background: "lightgray" }}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-01-ValueInput.js",
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
// [null, "foci"], "start"

export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {}, // setValue // ["pin"]
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
  "path": "./${foldername}/03-props/a/03-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Adapt signature from callback to state manager",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted // ["pin"]
    onMouseLeave = boolean => {}, // setHighlighted

    onClick = () => {}, // ["pin"]
  } = props;

  return (
    <button
      style={highlighted && { background: "lightgray" }}
    >
      {children}
    </button>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-01-ValueInput.js",
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
// [null, "foci"], "start"

export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {}, // setValue
  } = props;

  const handleChange = event => onChange( // [null, ""]
    event.target.value // [null, ""]
  ); // [null, ""]

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
  "path": "./${foldername}/03-props/a/03-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Adapters bridge the gaps between dissimilar APIs",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

    onClick = () => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter( // [""]
    true
  );
  const handleMouseLeave = () => onMouseLeave(
    false
  );

  const handleClick = () => onClick(); // [""]

  return (
    <button
      style={highlighted && { background: "lightgray" }}
    >
      {children}
    </button>
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

    onChange = string => {}, // setValue
  } = props;

  const handleChange = event => onChange(
    event.target.value
  );

  return (
    <input
      value={value}

      onChange={handleChange} // [""]
    >
    </input>
  );
};

// [null, "foci"], "end"
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Listen for child events",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"



export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}
      // Please hold your :hover critiques for now... // [""]
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick} // [""]
    >
      {children}
    </button>
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

    onChange = string => {}, // setValue
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
  "path": "./${foldername}/03-props/a/03-${1}-${count}-02-BasicButton.js",
  "context": {
     "column": "BasicButton",
     "code": {
      "review": [
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

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

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

    onChange = string => {}, // setValue
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
// [null, "foci"], "start", [""]
export const App = () => {
};

// [null, "foci"], "end", [""]
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Consume the component",
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

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
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

    onChange = string => {}, // setValue
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
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Consume the component",
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

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start"
export const App = () => {
  return ( // [""]
    <BasicButton
    >
    </BasicButton>
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

    onChange = string => {}, // setValue
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
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Pass props to the component",
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

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start"
export const App = () => {
  const [highlighted, setHighlighted] = useState( // [""]
    false
  ); // [""]

  return (
    <BasicButton // ["pin"]
    > // ["pin"]
    </BasicButton>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["f2f"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {}, // setValue
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
// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value} // [""]
      onChange={setValue} // [""]
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
        ["f2f"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

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
  const [highlighted, setHighlighted] = useState(
    false
  );

  return (
    <BasicButton
      highlighted={highlighted} // [""]
      onMouseEnter={setHighlighted}
      onMouseLeave={setHighlighted} // [""]
    >
    </BasicButton>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Reuse component",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci", "note", "duped"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {}, // setValue
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
// [null, "foci"], "start"



export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value} // [null, "duped"]
      onChange={setValue} // [null, "duped"]
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
      value={value} // [null, "duped"]
      onChange={setValue} // [null, "duped"]
    >
    </ValueInput>
  );
}; // [""]


// [null, "foci"], "end"
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Reuse component",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["foci", "note", "duped"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start"



export const App = () => {
  const [highlighted, setHighlighted] = useState(
    false
  );

  return (
    <BasicButton
      highlighted={highlighted} // [null, "duped"]
      onMouseEnter={setHighlighted} // [null, "duped"]
      onMouseLeave={setHighlighted} // [null, "duped"]
    >
    </BasicButton>
  );
};

export const Lib = () => { // [""]
  const [highlighted, setHighlighted] = useState(
    false
  );

  return (
    <BasicButton
      highlighted={highlighted} // [null, "duped"]
      onMouseEnter={setHighlighted} // [null, "duped"]
      onMouseLeave={setHighlighted} // [null, "duped"]
    >
    </BasicButton>
  );
}; // [""]


// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "title": "Lingering property-callback relationship implementation details",
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "note", "duped"]
      ]
    }
  }
}
`;


export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {}, // setValue
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
// [null, "foci"], "start"



export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      value={value} // [null, "duped"]
      onChange={setValue} // [null, "duped"]
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
      value={value} // [null, "duped"]
      onChange={setValue} // [null, "duped"]
    >
    </ValueInput>
  );
};


// [null, "foci"], "end"
export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "title": "Lingering property-callback relationship implementation details",
     "column": "BasicButton",
     "code": {
      "review": [
        ["foci", "note", "duped"]
      ]
    }
  }
}
`;




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start"



export const App = () => {
  const [highlighted, setHighlighted] = useState(
    false
  );

  return (
    <BasicButton
      highlighted={highlighted} // [null, "duped"]
      onMouseEnter={setHighlighted} // [null, "duped"]
      onMouseLeave={setHighlighted} // [null, "duped"]
    >
    </BasicButton>
  );
};

export const Lib = () => {
  const [highlighted, setHighlighted] = useState(
    false
  );

  return (
    <BasicButton
      highlighted={highlighted} // [null, "duped"]
      onMouseEnter={setHighlighted} // [null, "duped"]
      onMouseLeave={setHighlighted} // [null, "duped"]
    >
    </BasicButton>
  );
};


// [null, "foci"], "end"
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

    onChange = string => {}, // setValue
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
// [null, "foci"], "start"



export const App = () => {
  const [value, setValue] = useState(
    "default text"
  );

  return (
    <ValueInput
      {...state} // [null, ""]
      onChange={setValue} // [null, "pin"]
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
      {...state} // [null, ""]
      onChange={setValue} // [null, "pin"]
    >
    </ValueInput>
  );
};


// [null, "foci"], "end"
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

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start"



export const App = () => {
  const [highlighted, setHighlighted] = useState(
    false
  );

  return (
    <BasicButton
      {...state} // [null, ""]
      onMouseEnter={setHighlighted} // [null, "pin"]
      onMouseLeave={setHighlighted} // [null, "pin"]
    >
    </BasicButton>
  );
};

export const Lib = () => {
  const [highlighted, setHighlighted] = useState(
    false
  );

  return (
    <BasicButton
      {...state} // [null, ""]
      onMouseEnter={setHighlighted} // [null, "pin"]
      onMouseLeave={setHighlighted} // [null, "pin"]
    >
    </BasicButton>
  );
};


// [null, "foci"], "end"
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


export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {}, // setValue
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
// [null, "foci"], "start"



export const App = () => {
  const [value, setValue] = useState( // [null, "direct"]
    "default text" // [null, "direct"]
  ); // [null, "direct"]

  return (
    <ValueInput
      {...state} // [null, "pin"]
      onChange={setState} // [null, ""]
    >
    </ValueInput>
  );
};

export const Lib = () => {
  const [value, setValue] = useState( // [null, "direct"]
    "placeholder" // [null, "direct"]
  ); // [null, "direct"]

  return (
    <ValueInput
      {...state} // [null, "pin"]
      onChange={setState} // [null, ""]
    >
    </ValueInput>
  );
};


// [null, "foci"], "end"
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




export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start"



export const App = () => {
  const [highlighted, setHighlighted] = useState( // [null, "direct"]
    false // [null, "direct"]
  ); // [null, "direct"]

  return (
    <BasicButton
      {...state} // [null, "pin"]
      onMouseEnter={setState} // [null, ""]
      onMouseLeave={setState} // [null, ""]
    >
    </BasicButton>
  );
};

export const Lib = () => {
  const [highlighted, setHighlighted] = useState( // [null, "direct"]
    false // [null, "direct"]
  ); // [null, "direct"]

  return (
    <BasicButton
      {...state} // [null, "pin"]
      onMouseEnter={setState} // [null, ""]
      onMouseLeave={setState} // [null, ""]
    >
    </BasicButton>
  );
};


// [null, "foci"], "end"
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

    onChange = string => {}, // setValue
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
// [null, "foci"], "start"



export const App = () => {
  const [value, setValue] = useState( // [null, "pin"]
    { value: "default text" } // [null, ""]
  ); // [null, "pin"]

  return (
    <ValueInput
      {...state}
      onChange={setState}
    >
    </ValueInput>
  );
};

export const Lib = () => {
  const [value, setValue] = useState( // [null, "pin"]
    { value: "placeholder" } // [null, ""]
  ); // [null, "pin"]

  return (
    <ValueInput
      {...state}
      onChange={setState}
    >
    </ValueInput>
  );
};


// [null, "foci"], "end"
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

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start"



export const App = () => {
  const [highlighted, setHighlighted] = useState( // [null, "pin"]
    { highlighted: false } // [null, ""]
  ); // [null, "pin"]

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState}
      onMouseLeave={setState}
    >
    </BasicButton>
  );
};

export const Lib = () => {
  const [highlighted, setHighlighted] = useState( // [null, "pin"]
    {} // [null, ""]
  ); // [null, "pin"]

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState}
      onMouseLeave={setState}
    >
    </BasicButton>
  );
};


// [null, "foci"], "end"
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

    onChange = string => {}, // setValue
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
// [null, "foci"], "start"



export const App = () => {
  const [state, setState] = useState( // [null, ""]
    { value: "default text" } // [null, "pin"]
  ); // [null, "pin"]

  return (
    <ValueInput
      {...state}
      onChange={setState}
    >
    </ValueInput>
  );
};

export const Lib = () => {
  const [state, setState] = useState( // [null, ""]
    { value: "placeholder" } // [null, "pin"]
  ); // [null, "pin"]

  return (
    <ValueInput
      {...state}
      onChange={setState}
    >
    </ValueInput>
  );
};


// [null, "foci"], "end"
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

    onMouseEnter = boolean => {}, // setHighlighted
    onMouseLeave = boolean => {}, // setHighlighted

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
      style={highlighted && { background: "lightgray" }}

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );
};
// [null, "foci"], "start"



export const App = () => {
  const [state, setState] = useState( // [null, ""]
    { highlighted: false } // [null, "pin"]
  ); // [null, "pin"]

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState}
      onMouseLeave={setState}
    >
    </BasicButton>
  );
};

export const Lib = () => {
  const [state, setState] = useState( // [null, ""]
    {} // [null, "pin"]
  ); // [null, "pin"]

  return (
    <BasicButton
      {...state}
      onMouseEnter={setState}
      onMouseLeave={setState}
    >
    </BasicButton>
  );
};


// [null, "foci"], "end"
export default null;
