export default prefs.json`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start", [""]
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onValueChange = string => {}
  } = props;

  const handleChange = event =>
    onValueChange(event.target.value);

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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
    onSelectionChange = boolean => {},

    onHoverChange = boolean => {}
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
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onValueChange = string => {}
  } = props;

  const handleChange = event =>
    onValueChange(event.target.value);

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start", [""]
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
//// [null, "foci"], "end", [""]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    onSelectionChange = boolean => {},

    onHoverChange = boolean => {}
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
//// [null, "foci"], "start", [""]
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onMouseEnter={
        () => setHighlighted(true)
      }
      onMouseLeave={
        () => setHighlighted(false)
      }

      selected={selected}
      onClick={
        event => setSelected(
          event.ctrlKey ? !selected : true
        )
      }
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onValueChange = string => {}
  } = props;

  const handleChange = event =>
    onValueChange(event.target.value);

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [value, setValue] = useState("default text");

  return (
    <ValueInput
      value={value}

      onChange={ // ["pin"]
        event => setValue(event.target.value)
      } // ["pin"]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    onSelectionChange = boolean => {},

    onHoverChange = boolean => {}
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
//// [null, "foci"], "start"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onMouseEnter={ // ["pin"]
        () => setHighlighted(true)
      }
      onMouseLeave={
        () => setHighlighted(false)
      } // ["pin"]

      selected={selected}
      onClick={ // [null, "pin"]
        event => setSelected( // [null, "pin"]
          event.ctrlKey ? !selected : true // [null, "pin"]
        ) // [null, "pin"]
      } // [null, "pin"]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onValueChange = string => {}
  } = props;

  const handleChange = event =>
    onValueChange(event.target.value);

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [value, setValue] = useState("default text");

  return (
    <ValueInput
      value={value}

      onValueChange={ // [null, ""]
        setValue // [null, ""]
      }
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    onSelectionChange = boolean => {},

    onHoverChange = boolean => {}
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
//// [null, "foci"], "start"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onHoverChange={ // [null, ""]
        setHighlighted // [null, ""]
      }

      selected={selected}
      onSelectionChange={ // [null, ""]
        setSelected // [null, ""]
      }
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onValueChange = string => {}
  } = props;

  const handleChange = event =>
    onValueChange(event.target.value);

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [value, setValue] = useState("default text"); // [null, "pin"]
  // Residual property-callback relationship implementation details // [null, ""]
  return (
    <ValueInput
      value={value} // ["pin"]

      onValueChange={
        setValue
      } // ["pin"]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    onSelectionChange = boolean => {},

    onHoverChange = boolean => {}
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
//// [null, "foci"], "start"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false); // [null, "pin"]
  const [selected, setSelected] = useState(false); // [null, "pin"]
  // Residual property-callback relationship implementation details // [null, ""]
  return (
    <LineItem
      highlighted={highlighted} // ["pin"]
      onHoverChange={
        setHighlighted
      }

      selected={selected}
      onSelectionChange={
        setSelected
      } // ["pin"]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"],
        ["foci"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start", [""]
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onValueChange = string => {}
  } = props;

  const handleChange = event =>
    onValueChange(event.target.value);

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "end", [""]
export const App = () => {
  const [value, setValue] = useState("default text");

  return (
    <ValueInput
      value={value}

      onValueChange={
        setValue
      }
    >
    </ValueInput>
  );

};
//

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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
    onSelectionChange = boolean => {},

    onHoverChange = boolean => {}
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
//// [null, "foci"], "end", [""]
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onHoverChange={
        setHighlighted
      }

      selected={selected}
      onSelectionChange={
        setSelected
      }
    >
    </LineItem>
  );

};
//

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
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
    onValueChange = string => {}
  } = props;

  const handleChange = event =>
    onValueChange(event.target.value);

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "end"
export const App = () => {
  const [value, setValue] = useState("default text");

  return (
    <ValueInput
      value={value}

      onValueChange={
        setValue
      }
    >
    </ValueInput>
  );

};
//

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
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
    onSelectionChange = boolean => {}, // [null, ""]

    onHoverChange = boolean => {}
  } = props;

  const handleClick = event => // [""]
    onSelectionChange(event.ctrlKey ? !selected : true); // [""]

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
//// [null, "foci"], "end"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onHoverChange={
        setHighlighted
      }

      selected={selected}
      onSelectionChange={
        setSelected
      }
    >
    </LineItem>
  );

};
//

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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
    whenSelectionChange = reducer => {}, // [null, ""]
    // Alternate prefix to disambiguate call-signature // [null, "pin"]
    onHoverChange = boolean => {}
  } = props;

  const handleClick = event => // ["pin"]
    onSelectionChange(event.ctrlKey ? !selected : true); // ["pin"]

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
//// [null, "foci"], "end"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onHoverChange={
        setHighlighted
      }

      selected={selected}
      onSelectionChange={
        setSelected
      }
    >
    </LineItem>
  );

};
//

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
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
    whenSelectionChange = reducer => {}, // [null, ""]
    // Alternate prefix to disambiguate call-signature // [null, ""]
    onHoverChange = boolean => {}
  } = props;

  const handleClick = event => { // [""]
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  }; // [""]

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
//// [null, "foci"], "end"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onHoverChange={
        setHighlighted
      }

      selected={selected}
      onSelectionChange={
        setSelected
      }
    >
    </LineItem>
  );

};
//

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
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
    whenValueChange = reducer => {} // [null, ""]
  } = props;

  const handleChange = event => { // [""]
    const next = event.target.value;
    whenValueChange(
      state => {
        return { ...state, value: next }
      }
    );
  }; // [""]

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "end"
export const App = () => {
  const [value, setValue] = useState("default text");

  return (
    <ValueInput
      value={value}

      onValueChange={
        setValue
      }
    >
    </ValueInput>
  );

};
//

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
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
    whenSelectionChange = reducer => {},
    // Alternate prefix to disambiguate call-signature // [null, ""]
    whenHoverChange = reducer => {} // [null, ""]
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => { // [""]
    whenHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: false };
      }
    );
  }; // [""]

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
//// [null, "foci"], "end"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onHoverChange={
        setHighlighted
      }

      selected={selected}
      onSelectionChange={
        setSelected
      }
    >
    </LineItem>
  );

};
//

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    whenValueChange = reducer => {}
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start", [""]
export const App = () => {
  const [value, setValue] = useState("default text");

  return (
    <ValueInput
      value={value}

      onValueChange={
        setValue
      }
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    whenSelectionChange = reducer => {},

    whenHoverChange = reducer => {}
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start", [""]
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onHoverChange={
        setHighlighted
      }

      selected={selected}
      onSelectionChange={
        setSelected
      }
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    whenValueChange = reducer => {}
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({ // [""]
    value: "default text"
  }); // [""]

  return (
    <ValueInput
      value={value} // ["pin"]

      onValueChange={
        setValue
      } // ["pin"]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    whenSelectionChange = reducer => {},

    whenHoverChange = reducer => {}
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({}); // [""]

  return (
    <LineItem
      highlighted={highlighted} // ["pin"]
      onHoverChange={
        setHighlighted
      }

      selected={selected}
      onSelectionChange={
        setSelected
      } // ["pin"]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    whenValueChange = reducer => {}
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({ // [""]
    value: "default text"
  }); // [""]

  return (
    <ValueInput
      {...state} // [null, ""]
      whenValueChange={setState} // [null, ""]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    whenSelectionChange = reducer => {},

    whenHoverChange = reducer => {}
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({}); // [null, ""]

  return (
    <LineItem
      {...state} // [""]
      whenHoverChange={setState}
      whenSelectionChange={setState} // [""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    whenValueChange = reducer => {} // ["pin"]
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      whenValueChange={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["pin"]
      ]
    }
  }
}
`;

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    whenSelectionChange = reducer => {}, // ["pin"]

    whenHoverChange = reducer => {} // ["pin"]
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      whenHoverChange={setState}
      whenSelectionChange={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // reducer => {} // [""]

    whenValueChange = reducer => {}
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      whenValueChange={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // reducer => {} // [""]

    whenSelectionChange = reducer => {},

    whenHoverChange = reducer => {}
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      whenHoverChange={setState}
      whenSelectionChange={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // reducer => {}

    whenValueChange = driver // [""]
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      whenValueChange={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // reducer => {}

    whenSelectionChange = driver, // [""]

    whenHoverChange = driver // [""]
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      whenHoverChange={setState}
      whenSelectionChange={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // reducer => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start", [""]
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      whenValueChange={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // reducer => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start", [""]
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      whenHoverChange={setState}
      whenSelectionChange={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // reducer => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });
  // Controlled with minimal implementation detail knowledge // [null, ""]
  return (
    <ValueInput
      {...state}
      driver={setState} // [null, ""]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // reducer => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChange(
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});
  // Controlled with minimal implementation detail knowledge // [null, ""]
  return (
    <LineItem
      {...state}
      driver={setState} // [null, ""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // reducer => {} // [null, ""]

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange( // [null, ""]
      state => {
        return { ...state, value: next }
      }
    ); // [null, ""]
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      driver={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // reducer => {} // [null, ""]

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange( // [null, ""]
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    ); // [null, ""]
  };

  const handleMouseEnter = () => {
    whenHoverChange( // [null, ""]
      state => {
        return { ...state, highlighted: true };
      }
    ); // [null, ""]
  };
  const handleMouseLeave = () => {
    whenHoverChange( // [null, ""]
      state => {
        return { ...state, highlighted: false };
      }
    ); // [null, ""]
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      driver={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // (action, reducer) => {} // [null, ""]

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange( // [null, ""]
      state => {
        return { ...state, value: next }
      }
    ); // [null, ""]
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      driver={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // (action, reducer) => {} // [null, ""]

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange( // [null, ""]
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    ); // [null, ""]
  };

  const handleMouseEnter = () => {
    whenHoverChange( // [null, ""]
      state => {
        return { ...state, highlighted: true };
      }
    ); // [null, ""]
  };
  const handleMouseLeave = () => {
    whenHoverChange( // [null, ""]
      state => {
        return { ...state, highlighted: false };
      }
    ); // [null, ""]
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      driver={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // (action, reducer) => {} // [null, "pin"]

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next }, // [null, ""]
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      driver={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
      ]
    }
  }
}
`;

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // (action, reducer) => {} // [null, "pin"]

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey }, // [null, ""]
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true; // [null, ""]
    whenHoverChange(
      { type: "whenHoverChange", hovering }, // [null, ""]
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false; // [null, ""]
    whenHoverChange(
      { type: "whenHoverChange", hovering }, // [null, ""]
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      driver={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next },
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start", [""]
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      driver={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start", [""]
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      driver={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next },
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  const driveState = (action, reducer) => { // [""]
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  }; // [""]

  return (
    <ValueInput
      {...state}
      driver={driveState} // [null, ""]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  const driveState = (action, reducer) => { // [""]
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  }; // [""]

  return (
    <LineItem
      {...state}
      driver={driveState} // [null, ""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next },
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
const useDrivenState = initialState => { // [null, ""]
  const [state, setState] = useState(initialState); // [null, ""]

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, driveState]; // [null, ""]
}; // [null, ""]
//
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return (
    <ValueInput
      {...state}
      driver={driveState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
const useDrivenState = initialState => { // [null, ""]
  const [state, setState] = useState(initialState); // [null, ""]

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, driveState]; // [null, ""]
}; // [null, ""]
//
export const App = () => {
  const [state, setState] = useState({});

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return (
    <LineItem
      {...state}
      driver={driveState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next },
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
const useDrivenState = initialState => {
  const [state, setState] = useState(initialState);

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, driveState];
};
//
export const App = () => {
  const [state, setState] = useState({ // ["pin"]
    value: "default text"
  });

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  }; // ["pin"]

  return (
    <ValueInput
      {...state}
      driver={driveState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
const useDrivenState = initialState => {
  const [state, setState] = useState(initialState);

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, driveState];
};
//
export const App = () => {
  const [state, setState] = useState({}); // ["pin"]

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  }; // ["pin"]

  return (
    <LineItem
      {...state}
      driver={driveState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next },
      state => {
        return { ...state, value: next }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "start"
const useDrivenState = initialState => {
  const [state, setState] = useState(initialState);

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, driveState];
};
//
export const App = () => {
  const [state, driveState] = useDrivenState({ // [null, ""]
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      driver={driveState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    selected = false,

    highlighted = false
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => {
        return { ...state, highlighted: false };
      }
    );
  };

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
//// [null, "foci"], "start"
const useDrivenState = initialState => {
  const [state, setState] = useState(initialState);

  const driveState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, driveState];
};
//
export const App = () => {
  const [state, driveState] = useDrivenState({}); // [null, ""]

  return (
    <LineItem
      {...state}
      driver={driveState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        [""]
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
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next },
      state => { // [""]
        return { ...state, value: next }
      } // [""]
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//// [null, "foci"], "end"
export const App = () => {
  const [state, driveState] = useDrivenState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      driver={driveState}
    >
    </ValueInput>
  );

};
//

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
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
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey },
      state => { // [null, ""]
        const next = ctrlKey ? !state.selected : true; // [null, ""]
        return { ...state, selected: next }; // [null, ""]
      } // [null, ""]
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => { // [null, ""]
        return { ...state, highlighted: true }; // [null, ""]
      } // [null, ""]
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      state => { // [null, ""]
        return { ...state, highlighted: false }; // [null, ""]
      } // [null, ""]
    );
  };

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
//// [null, "foci"], "end"
export const App = () => {
  const [state, driveState] = useDrivenState({});

  return (
    <LineItem
      {...state}
      driver={driveState}
    >
    </LineItem>
  );

};
//

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        [""]
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
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next },
      (state, action) => { // [""]
        return { ...state, value: action.value }
      } // [""]
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//
export const App = () => {
  const [state, driveState] = useDrivenState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      driver={driveState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        [""]
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
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey },
      (state, action) => { // [null, ""]
        const next = action.ctrlKey ? !state.selected : true; // [null, ""]
        return { ...state, selected: next }; // [null, ""]
      } // [null, ""]
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      (state, action) => { // [null, ""]
        return { ...state, highlighted: action.hovering }; // [null, ""]
      } // [null, ""]
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      (state, action) => { // [null, ""]
        return { ...state, highlighted: action.hovering }; // [null, ""]
      } // [null, ""]
    );
  };

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
export const App = () => {
  const [state, driveState] = useDrivenState({});

  return (
    <LineItem
      {...state}
      driver={driveState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
  "context": {
     "column": "ValueInput",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start", [""]
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next },
      (state, action) => {
        return { ...state, value: action.value }
      }
    );
  };

  return (
    <input
      value={value}

      onChange={
        handleChange
      }
    >
    </input>
  );

};
//
export const App = () => {
  const [state, driveState] = useDrivenState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      driver={driveState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey },
      (state, action) => {
        const next = action.ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };

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
export const App = () => {
  const [state, driveState] = useDrivenState({});

  return (
    <LineItem
      {...state}
      driver={driveState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;
