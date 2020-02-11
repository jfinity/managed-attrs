export default prefs/*json*/`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
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

//// [null, "foci"], "start", [""]
export const ValueInput = props => {
  const {
    value = "",

    onValueChange = string => {},
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

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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
//// [null, "foci"], "end", [""]

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    onValueChange = string => {},
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

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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

//
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



export default keyframe/*json*/`{
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
    value = "",

    onValueChange = string => {},
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

export default keyframe/*json*/`{
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



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    onValueChange = string => {},
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

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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

//
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



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    onValueChange = string => {},
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

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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

//
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



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
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

//// [null, "foci"], "start", [""]
export const ValueInput = props => {
  const {
    value = "",

    onValueChange = string => {},
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

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-02-LineItem.js",
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



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/a/07-${1}-${count}-01-ValueInput.js",
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

//// [null, "foci"], "start"
export const ValueInput = props => {
  const {
    value = "",

    onValueChange = string => {},
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

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    onSelectionChange = boolean => {}, // [null, ""]

    onHoverChange = boolean => {},
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
      {children}
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



export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    whenSelectionChanges = reducer => {}, // [null, ""]
    // Alternate prefix to disambiguate call-signature // [null, "pin"]
    onHoverChange = boolean => {},
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
      {children}
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



export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    whenSelectionChanges = reducer => {}, // [null, ""]
    // Alternate prefix to disambiguate call-signature // [null, ""]
    onHoverChange = boolean => {},
  } = props;

  const handleClick = event => { // [""]
    const { ctrlKey } = event;
    whenSelectionChanges(
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
      {children}
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



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
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

//// [null, "foci"], "start"
export const ValueInput = props => {
  const {
    value = "",

    whenValueChanges = reducer => {}, // [null, ""]
  } = props;

  const handleChange = event => { // [""]
    const next = event.target.value;
    whenValueChanges(
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

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    whenSelectionChanges = reducer => {},
    // Alternate prefix to disambiguate call-signature // [null, ""]
    whenHoverChanges = reducer => {}, // [null, ""]
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => { // [""]
    whenHoverChanges(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChanges(
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
      {children}
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



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    whenValueChanges = reducer => {},
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
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

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    whenSelectionChanges = reducer => {},

    whenHoverChanges = reducer => {},
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChanges(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChanges(
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
      {children}
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



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    whenValueChanges = reducer => {},
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
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

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    whenSelectionChanges = reducer => {},

    whenHoverChanges = reducer => {},
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChanges(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChanges(
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
      {children}
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



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    whenValueChanges = reducer => {},
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
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
      whenValueChanges={setState} // [null, ""]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    whenSelectionChanges = reducer => {},

    whenHoverChanges = reducer => {},
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChanges(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChanges(
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({}); // [null, ""]

  return (
    <LineItem
      {...state} // [""]
      whenHoverChanges={setState}
      whenSelectionChanges={setState} // [""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
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
    value = "",

    whenValueChanges = reducer => {}, // ["pin"]
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
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
      whenValueChanges={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    whenSelectionChanges = reducer => {}, // ["pin"]

    whenHoverChanges = reducer => {}, // ["pin"]
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChanges(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChanges(
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      whenHoverChanges={setState}
      whenSelectionChanges={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
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
    value = "",

    stateManager, // reducer => {} // [""]

    whenValueChanges = reducer => {},
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
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
      whenValueChanges={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    stateManager, // reducer => {} // [""]

    whenSelectionChanges = reducer => {},

    whenHoverChanges = reducer => {},
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChanges(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChanges(
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      whenHoverChanges={setState}
      whenSelectionChanges={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
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
    value = "",

    stateManager, // reducer => {}

    whenValueChanges = stateManager, // [""]
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
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
      whenValueChanges={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    stateManager, // reducer => {}

    whenSelectionChanges = stateManager, // [""]

    whenHoverChanges = stateManager, // [""]
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChanges(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChanges(
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      whenHoverChanges={setState}
      whenSelectionChanges={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    stateManager, // reducer => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
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
      whenValueChanges={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    stateManager, // reducer => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChanges(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChanges(
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start", [""]
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      whenHoverChanges={setState}
      whenSelectionChanges={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    stateManager, // reducer => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
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
      stateManager={setState} // [null, ""]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/07-conform/b/07-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    stateManager, // reducer => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    whenHoverChanges(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    whenHoverChanges(
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
      {children}
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
      stateManager={setState} // [null, ""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
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
    value = "",

    stateManager, // reducer => {} // [null, ""]

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges( // [null, ""]
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
      stateManager={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    stateManager, // reducer => {} // [null, ""]

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges( // [null, ""]
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    ); // [null, ""]
  };

  const handleMouseEnter = () => {
    whenHoverChanges( // [null, ""]
      state => {
        return { ...state, highlighted: true };
      }
    ); // [null, ""]
  };
  const handleMouseLeave = () => {
    whenHoverChanges( // [null, ""]
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      stateManager={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
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
    value = "",

    stateManager, // (action, reducer) => {} // [null, ""]

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges( // [null, ""]
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
      stateManager={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    stateManager, // (action, reducer) => {} // [null, ""]

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges( // [null, ""]
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    ); // [null, ""]
  };

  const handleMouseEnter = () => {
    whenHoverChanges( // [null, ""]
      state => {
        return { ...state, highlighted: true };
      }
    ); // [null, ""]
  };
  const handleMouseLeave = () => {
    whenHoverChanges( // [null, ""]
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      stateManager={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
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
    value = "",

    stateManager, // (action, reducer) => {} // [null, "pin"]

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
      { type: "whenValueChanges", value: next }, // [null, ""]
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
      stateManager={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    stateManager, // (action, reducer) => {} // [null, "pin"]

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      { type: "whenSelectionChanges", ctrlKey }, // [null, ""]
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true; // [null, ""]
    whenHoverChanges(
      { type: "whenHoverChanges", hovering }, // [null, ""]
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false; // [null, ""]
    whenHoverChanges(
      { type: "whenHoverChanges", hovering }, // [null, ""]
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      stateManager={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    stateManager, // (action, reducer) => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
      { type: "whenValueChanges", value: next },
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
      stateManager={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    stateManager, // (action, reducer) => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      { type: "whenSelectionChanges", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start", [""]
export const App = () => {
  const [state, setState] = useState({});

  return (
    <LineItem
      {...state}
      stateManager={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    stateManager, // (action, reducer) => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
      { type: "whenValueChanges", value: next },
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

  const manageState = (action, reducer) => { // [""]
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
      stateManager={manageState} // [null, ""]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    stateManager, // (action, reducer) => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      { type: "whenSelectionChanges", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
export const App = () => {
  const [state, setState] = useState({});

  const manageState = (action, reducer) => { // [""]
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
      stateManager={manageState} // [null, ""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    stateManager, // (action, reducer) => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
      { type: "whenValueChanges", value: next },
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
const useManagedState = initialState => { // [null, ""]
  const [state, setState] = useState(initialState); // [null, ""]

  const manageState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, manageState]; // [null, ""]
}; // [null, ""]
//
export const App = () => {
  const [state, setState] = useState({
    value: "default text"
  });

  const manageState = (action, reducer) => {
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
      stateManager={manageState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    stateManager, // (action, reducer) => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      { type: "whenSelectionChanges", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
const useManagedState = initialState => { // [null, ""]
  const [state, setState] = useState(initialState); // [null, ""]

  const manageState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, manageState]; // [null, ""]
}; // [null, ""]
//
export const App = () => {
  const [state, setState] = useState({});

  const manageState = (action, reducer) => {
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
      stateManager={manageState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    stateManager, // (action, reducer) => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
      { type: "whenValueChanges", value: next },
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
const useManagedState = initialState => {
  const [state, setState] = useState(initialState);

  const manageState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, manageState];
};
//
export const App = () => {
  const [state, setState] = useState({ // ["pin"]
    value: "default text"
  });

  const manageState = (action, reducer) => {
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
      stateManager={manageState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    stateManager, // (action, reducer) => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      { type: "whenSelectionChanges", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
const useManagedState = initialState => {
  const [state, setState] = useState(initialState);

  const manageState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, manageState];
};
//
export const App = () => {
  const [state, setState] = useState({}); // ["pin"]

  const manageState = (action, reducer) => {
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
      stateManager={manageState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
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

//
export const ValueInput = props => {
  const {
    value = "",

    stateManager, // (action, reducer) => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
      { type: "whenValueChanges", value: next },
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
const useManagedState = initialState => {
  const [state, setState] = useState(initialState);

  const manageState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, manageState];
};
//
export const App = () => {
  const [state, manageState] = useManagedState({ // [null, ""]
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      stateManager={manageState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

//
export const LineItem = props => {
  const {
    children,

    selected = false,

    highlighted = false,

    stateManager, // (action, reducer) => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      { type: "whenSelectionChanges", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
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
      {children}
    </div>
  );

};
//// [null, "foci"], "start"
const useManagedState = initialState => {
  const [state, setState] = useState(initialState);

  const manageState = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, manageState];
};
//
export const App = () => {
  const [state, manageState] = useManagedState({}); // [null, ""]

  return (
    <LineItem
      {...state}
      stateManager={manageState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
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
    value = "",

    stateManager, // (action, reducer) => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
      { type: "whenValueChanges", value: next },
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
  const [state, manageState] = useManagedState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      stateManager={manageState}
    >
    </ValueInput>
  );

};
//

export default null;

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    stateManager, // (action, reducer) => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      { type: "whenSelectionChanges", ctrlKey },
      state => { // [null, ""]
        const next = ctrlKey ? !state.selected : true; // [null, ""]
        return { ...state, selected: next }; // [null, ""]
      } // [null, ""]
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
      state => { // [null, ""]
        return { ...state, highlighted: true }; // [null, ""]
      } // [null, ""]
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
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
      {children}
    </div>
  );

};
//// [null, "foci"], "end"
export const App = () => {
  const [state, manageState] = useManagedState({});

  return (
    <LineItem
      {...state}
      stateManager={manageState}
    >
    </LineItem>
  );

};
//

export default null;



export default keyframe/*json*/`{
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
    value = "",

    stateManager, // (action, reducer) => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
      { type: "whenValueChanges", value: next },
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
  const [state, manageState] = useManagedState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      stateManager={manageState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe/*json*/`{
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
    children,

    selected = false,

    highlighted = false,

    stateManager, // (action, reducer) => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      { type: "whenSelectionChanges", ctrlKey },
      (state, action) => { // [null, ""]
        const next = action.ctrlKey ? !state.selected : true; // [null, ""]
        return { ...state, selected: next }; // [null, ""]
      } // [null, ""]
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
      (state, action) => { // [null, ""]
        return { ...state, highlighted: action.hovering }; // [null, ""]
      } // [null, ""]
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
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
      {children}
    </div>
  );

};
//
export const App = () => {
  const [state, manageState] = useManagedState({});

  return (
    <LineItem
      {...state}
      stateManager={manageState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-01-ValueInput.js",
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

//// [null, "foci"], "start", [""]
export const ValueInput = props => {
  const {
    value = "",

    stateManager, // (action, reducer) => {}

    whenValueChanges = stateManager,
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChanges(
      { type: "whenValueChanges", value: next },
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
  const [state, manageState] = useManagedState({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      stateManager={manageState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe/*json*/`{
  "path": "./${foldername}/08-conform/a/08-${1}-${count}-02-LineItem.js",
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

    stateManager, // (action, reducer) => {}

    whenSelectionChanges = stateManager,

    whenHoverChanges = stateManager,
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChanges(
      { type: "whenSelectionChanges", ctrlKey },
      (state, action) => {
        const next = action.ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChanges(
      { type: "whenHoverChanges", hovering },
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
      {children}
    </div>
  );

};
//
export const App = () => {
  const [state, manageState] = useManagedState({});

  return (
    <LineItem
      {...state}
      stateManager={manageState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;
