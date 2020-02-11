export default prefs/*json*/`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe/*json*/`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start", [""]
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    onClick = event => {},

    onMouseEnter = event => {},
    onMouseLeave = event => {},
  } = props;

  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}

      onMouseEnter={
        onMouseEnter
      }
      onMouseLeave={
        onMouseLeave
      }
      onClick={
        onClick
      }
    >
      {children}
    </div>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    onClick = event => {}, // ["pin"]

    onMouseEnter = event => {},
    onMouseLeave = event => {}, // ["pin"]
  } = props;
  // Adapt signature from callback to state manager // [null, ""]
  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}

      onMouseEnter={
        onMouseEnter
      }
      onMouseLeave={
        onMouseLeave
      }
      onClick={
        onClick
      }
    >
      {children}
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    onSelectionChange = boolean => {}, // [null, ""]

    onMouseEnter = event => {},
    onMouseLeave = event => {},
  } = props;
  // Adapt signature from callback to state manager // [null, "pin"]
  const handleClick = event => // [null, ""]
    onSelectionChange(event.ctrlKey ? !selected : true); // [null, ""]

  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}

      onMouseEnter={
        onMouseEnter
      }
      onMouseLeave={
        onMouseLeave
      }
      onClick={
        onClick
      }
    >
      {children}
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    onSelectionChange = boolean => {},

    onHoverChange = boolean => {}, // [null, ""]
  } = props;
  // Adapt signature from callback to state manager // [null, "pin"]
  const handleClick = event =>
    onSelectionChange(event.ctrlKey ? !selected : true);

  const handleMouseEnter = () => onHoverChange(true); // [null, ""]
  const handleMouseLeave = () => onHoverChange(false); // [null, ""]

  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}

      onMouseEnter={
        onMouseEnter
      }
      onMouseLeave={
        onMouseLeave
      }
      onClick={
        onClick
      }
    >
      {children}
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    onSelectionChange = boolean => {},

    onHoverChange = boolean => {},
  } = props;
  // Adapt signature from callback to state manager
  const handleClick = event =>
    onSelectionChange(event.ctrlKey ? !selected : true);

  const handleMouseEnter = () => onHoverChange(true);
  const handleMouseLeave = () => onHoverChange(false);

  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}

      onMouseEnter={
        onMouseEnter // [null, ""]
      }
      onMouseLeave={
        onMouseLeave // [null, ""]
      }
      onClick={
        onClick // [null, ""]
      }
    >
      {children}
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    onSelectionChange = boolean => {},

    onHoverChange = boolean => {},
  } = props;
  // Adapt signature from callback to state manager
  const handleClick = event =>
    onSelectionChange(event.ctrlKey ? !selected : true);

  const handleMouseEnter = () => onHoverChange(true);
  const handleMouseLeave = () => onHoverChange(false);

  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}

      onMouseEnter={
        handleMouseEnter // [null, ""]
      }
      onMouseLeave={
        handleMouseLeave // [null, ""]
      }
      onClick={
        handleClick // [null, ""]
      }
    >
      {children}
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ValueInput = props => {
  const {
    value = "",

    onChange = event => {},
  } = props;
  // Adapt signature from callback to state manager // [null, ""]
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
//// [null, "foci"], "end"
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    onSelectionChange = boolean => {},

    onHoverChange = boolean => {},
  } = props;

  const handleClick = event =>
    onSelectionChange(event.ctrlKey ? !selected : true);

  const handleMouseEnter = () => onHoverChange(true);
  const handleMouseLeave = () => onHoverChange(false);

  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}

      onMouseEnter={
        handleMouseEnter
      }
      onMouseLeave={
        handleMouseLeave
      }
      onClick={
        handleClick
      }
    >
      {children}
    </div>
  );

};
//

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ValueInput = props => {
  const {
    value = "",

    onValueChange = string => {}, // [null, ""]
  } = props;

  const handleChange = event => // [null, ""]
    onValueChange(event.target.value); // [null, ""]

  return (
    <input
      value={value}

      onChange={
        handleChange // [null, ""]
      }
    >
    </input>
  );

};
//// [null, "foci"], "end"
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    onSelectionChange = boolean => {},

    onHoverChange = boolean => {},
  } = props;

  const handleClick = event =>
    onSelectionChange(event.ctrlKey ? !selected : true);

  const handleMouseEnter = () => onHoverChange(true);
  const handleMouseLeave = () => onHoverChange(false);

  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}

      onMouseEnter={
        handleMouseEnter
      }
      onMouseLeave={
        handleMouseLeave
      }
      onClick={
        handleClick
      }
    >
      {children}
    </div>
  );

};
//

export default null;

