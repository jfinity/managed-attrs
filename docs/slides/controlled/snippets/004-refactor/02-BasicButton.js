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

//// [null, "foci"], "start", ["f2f"]
export const ValueInput = props => {
  const {
    value = "",

    onChange = string => {}, // setValue // [null, "direct"]
  } = props;

  const handleChange = event => onChange(event.target.value);

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );

};
//// [null, "foci"], "end", ["f2f"]

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

//// [null, "foci"], "start", ["f2f"]
export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = boolean => {}, // setHighlighted // [null, "direct"]
    onMouseLeave = boolean => {}, // setHighlighted // [null, "direct"]

    onClick = () => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(true);
  const handleMouseLeave = () => onMouseLeave(false);

  const handleClick = () => onClick();

  return (
    <button
      style={{ background: highlighted ? "lightgray" : "transparent" }}

      onMousEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );

};
//// [null, "foci"], "end", ["f2f"]

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-01-ValueInput.js",
  "context": {
     "subtitle": "An updater is (optionally) a function from prior state to next state.",
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

//// [null, "foci"], "start", ["f2f"]
export const ValueInput = props => {
  const {
    value = "",

    onChange = updater => {}, // setState // [null, ""]
  } = props;

  const handleChange = event => onChange(event.target.value); // [null, "direct"]

  return (
    <input
      value={value}

      onChange={handleChange}
    >
    </input>
  );

};
//// [null, "foci"], "end", ["f2f"]

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-02-BasicButton.js",
  "context": {
     "subtitle": "An updater is (optionally) a function from prior state to next state.",
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

//// [null, "foci"], "start", ["f2f"]
export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    onMouseEnter = updater => {}, // setState // [null, ""]
    onMouseLeave = updater => {}, // setState // [null, ""]

    onClick = () => {},
  } = props;

  const handleMouseEnter = () => onMouseEnter(true); // [null, "direct"]
  const handleMouseLeave = () => onMouseLeave(false); // [null, "direct"]

  const handleClick = () => onClick();

  return (
    <button
      style={{ background: highlighted ? "lightgray" : "transparent" }}

      onMousEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      onClick={handleClick}
    >
      {children}
    </button>
  );

};
//// [null, "foci"], "end", ["f2f"]

export default null;

// decodeURI/encodeURI
