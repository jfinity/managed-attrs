export default prefs.json`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe.json`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start", [""]
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    onClick = event => {},

    onMouseEnter = event => {},
    onMouseLeave = event => {}
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
    </div>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
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
    selected = false,

    highlighted = false
  } = props;

  const {
    onClick = event => {}, // ["pin"]

    onMouseEnter = event => {},
    onMouseLeave = event => {} // ["pin"]
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
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
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
    selected = false,

    highlighted = false
  } = props;

  const {
    onClick = event => {},

    onHoverChange = event => {} // [null, ""]
  } = props;
  // Adapt signature from callback to state manager // [null, "pin"]
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
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
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
    selected = false,

    highlighted = false
  } = props;

  const {
    onSelectionChange = event => {}, // [null, ""]

    onHoverChange = event => {}
  } = props;
  // Adapt signature from callback to state manager // [null, "pin"]
  const handleClick = event => // [null, ""]
    onSelectionChange(event.ctrlKey ? !selected : true); // [null, ""]

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
        onMouseEnter
      }
      onMouseLeave={
        onMouseLeave
      }
      onClick={
        onClick
      }
    >
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
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
    selected = false,

    highlighted = false
  } = props;

  const {
    onSelectionChange = event => {},

    onHoverChange = event => {}
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
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
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
    selected = false,

    highlighted = false
  } = props;

  const {
    onSelectionChange = event => {},

    onHoverChange = event => {}
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
    </div>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/06-refactor/a/06-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onChange = event => {}
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
    selected = false,

    highlighted = false
  } = props;

  const {
    onSelectionChange = event => {},

    onHoverChange = event => {}
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
    </div>
  );

};
//

export default null;



export default keyframe.json`{
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
    value = ""
  } = props;

  const {
    onValueChange = event => {} // [null, ""]
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
    selected = false,

    highlighted = false
  } = props;

  const {
    onSelectionChange = event => {},

    onHoverChange = event => {}
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
    </div>
  );

};
//

export default null;

