export default prefs.json`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe.json`{
  "path": "./${foldername}/07-update/a/07-${1}-${count}-01-ValueInput.js",
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
    onValueChange = event => {}
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-02-LineItem.js",
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
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-update/a/07-${1}-${count}-01-ValueInput.js",
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
    onValueChange = event => {}
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-02-LineItem.js",
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-01-ValueInput.js",
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
    onValueChange = event => {}
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-02-LineItem.js",
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-01-ValueInput.js",
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
    onValueChange = event => {}
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-02-LineItem.js",
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-01-ValueInput.js",
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
    onValueChange = event => {}
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-02-LineItem.js",
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-01-ValueInput.js",
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
    onValueChange = event => {}
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-02-LineItem.js",
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-01-ValueInput.js",
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
    onValueChange = event => {}
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-02-LineItem.js",
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
    onSelectionChange = event => {}, // [null, ""]
    // Alternate prefix to disambiguate call-signature // [null, ""]
    onHoverChange = event => {}
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
  "path": "./${foldername}/07-update/a/07-${1}-${count}-02-LineItem.js",
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
    emitSelectionChange = reducer => {}, // [null, ""]
    // Alternate prefix to disambiguate call-signature // [null, ""]
    onHoverChange = event => {}
  } = props;

  const handleClick = event => { // [""]
    const { ctrlKey } = event;
    emitSelectionChange(
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
  "path": "./${foldername}/07-update/b/07-${1}-${count}-01-ValueInput.js",
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
    emitValueChange = reducer => {} // [null, ""]
  } = props;

  const handleChange = event => { // [""]
    const next = event.target.value;
    emitValueChange(
      state => {
        return { ...state, value: next }
      }
    )
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
  "path": "./${foldername}/07-update/b/07-${1}-${count}-02-LineItem.js",
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
    emitSelectionChange = reducer => {},
    // Alternate prefix to disambiguate call-signature // [null, ""]
    emitHoverChange = reducer => {} // [null, ""]
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => { // [""]
    emitHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    emitHoverChange(
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
  "path": "./${foldername}/07-update/b/07-${1}-${count}-01-ValueInput.js",
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
    emitValueChange = reducer => {}
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      state => {
        return { ...state, value: next }
      }
    )
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
  "path": "./${foldername}/07-update/b/07-${1}-${count}-02-LineItem.js",
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
    emitSelectionChange = reducer => {},

    emitHoverChange = reducer => {}
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    emitHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    emitHoverChange(
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
  "path": "./${foldername}/07-update/b/07-${1}-${count}-01-ValueInput.js",
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
    emitValueChange = reducer => {}
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      state => {
        return { ...state, value: next }
      }
    )
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
      emitValueChange={setState} // [null, ""]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-update/b/07-${1}-${count}-02-LineItem.js",
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
    emitSelectionChange = reducer => {},

    emitHoverChange = reducer => {}
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    emitHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    emitHoverChange(
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
      emitHoverChange={setState}
      emitSelectionChange={setState} // [""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-update/b/07-${1}-${count}-01-ValueInput.js",
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
    emitValueChange = reducer => {} // ["pin"]
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      state => {
        return { ...state, value: next }
      }
    )
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
      emitValueChange={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-update/b/07-${1}-${count}-02-LineItem.js",
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
    emitSelectionChange = reducer => {}, // ["pin"]

    emitHoverChange = reducer => {} // ["pin"]
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    emitHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    emitHoverChange(
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
      emitHoverChange={setState}
      emitSelectionChange={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-update/b/07-${1}-${count}-01-ValueInput.js",
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
    emitter, // reducer => {} // [""]

    emitValueChange = emitter // [""]
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      state => {
        return { ...state, value: next }
      }
    )
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
      emitValueChange={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-update/b/07-${1}-${count}-02-LineItem.js",
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
    emitter, // reducer => {} // [""]

    emitSelectionChange = emitter,

    emitHoverChange = emitter // [""]
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    emitHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    emitHoverChange(
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
      emitHoverChange={setState}
      emitSelectionChange={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-update/b/07-${1}-${count}-01-ValueInput.js",
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
    emitter, // reducer => {}

    emitValueChange = emitter
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      state => {
        return { ...state, value: next }
      }
    )
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
      emitValueChange={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-update/b/07-${1}-${count}-02-LineItem.js",
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
    emitter, // reducer => {}

    emitSelectionChange = emitter,

    emitHoverChange = emitter
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    emitHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    emitHoverChange(
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
      emitHoverChange={setState}
      emitSelectionChange={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/07-update/b/07-${1}-${count}-01-ValueInput.js",
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
    emitter, // reducer => {}

    emitValueChange = emitter
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      state => {
        return { ...state, value: next }
      }
    )
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
      emitter={setState} // [null, ""]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/07-update/b/07-${1}-${count}-02-LineItem.js",
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
    emitter, // reducer => {}

    emitSelectionChange = emitter,

    emitHoverChange = emitter
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    emitHoverChange(
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    emitHoverChange(
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
      emitter={setState} // [null, ""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-01-ValueInput.js",
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
    emitter, // (action, reducer) => {} // [null, ""]

    emitValueChange = emitter
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      { type: "emitValueChange", value: next }, // [null, ""]
      state => {
        return { ...state, value: next }
      }
    )
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
      emitter={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-02-LineItem.js",
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
    emitter, // (action, reducer) => {} // [null, ""]

    emitSelectionChange = emitter,

    emitHoverChange = emitter
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      { type: "emitSelectionChange", ctrlKey }, // [null, ""]
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true; // [null, ""]
    emitHoverChange(
      { type: "emitHoverChange", hovering }, // [null, ""]
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false; // [null, ""]
    emitHoverChange(
      { type: "emitHoverChange", hovering }, // [null, ""]
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
      emitter={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-01-ValueInput.js",
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
    emitter, // (action, reducer) => {}

    emitValueChange = emitter
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      { type: "emitValueChange", value: next },
      state => {
        return { ...state, value: next }
      }
    )
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
      emitter={setState}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-02-LineItem.js",
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
    emitter, // (action, reducer) => {}

    emitSelectionChange = emitter,

    emitHoverChange = emitter
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      { type: "emitSelectionChange", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
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
      emitter={setState}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-01-ValueInput.js",
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
    emitter, // (action, reducer) => {}

    emitValueChange = emitter
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      { type: "emitValueChange", value: next },
      state => {
        return { ...state, value: next }
      }
    )
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

  const manager = (action, reducer) => { // [""]
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
      emitter={manager} // [null, ""]
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-02-LineItem.js",
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
    emitter, // (action, reducer) => {}

    emitSelectionChange = emitter,

    emitHoverChange = emitter
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      { type: "emitSelectionChange", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
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

  const manager = (action, reducer) => { // [""]
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
      emitter={manager} // [null, ""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-01-ValueInput.js",
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
    emitter, // (action, reducer) => {}

    emitValueChange = emitter
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      { type: "emitValueChange", value: next },
      state => {
        return { ...state, value: next }
      }
    )
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
const useEmissionReducer = initialState => { // [null, ""]
  const [state, setState] = useState(initialState); // [null, ""]

  const manager = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, manager]; // [null, ""]
}; // [null, ""]
//
export const App = () => { // [null, ""]
  const [state, manager] = useEmissionReducer({ // [null, ""]
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      emitter={manager}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-02-LineItem.js",
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
    emitter, // (action, reducer) => {}

    emitSelectionChange = emitter,

    emitHoverChange = emitter
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      { type: "emitSelectionChange", ctrlKey },
      state => {
        const next = ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
      state => {
        return { ...state, highlighted: true };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
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
const useEmissionReducer = initialState => { // [null, ""]
  const [state, setState] = useState(initialState); // [null, ""]

  const manager = (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
    }
  };

  return [state, manager]; // [null, ""]
}; // [null, ""]
//
export const App = () => { // [null, ""]
  const [state, manager] = useEmissionReducer({}); // [null, ""]

  return (
    <LineItem
      {...state}
      emitter={manager} // [null, ""]
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-01-ValueInput.js",
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
    emitter, // (action, reducer) => {}

    emitValueChange = emitter
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      { type: "emitValueChange", value: next },
      (state, action) => { // [""]
        return { ...state, value: action.value }
      } // [""]
    )
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
  const [state, manager] = useEmissionReducer({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      emitter={manager}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end"

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-02-LineItem.js",
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
    emitter, // (action, reducer) => {}

    emitSelectionChange = emitter,

    emitHoverChange = emitter
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      { type: "emitSelectionChange", ctrlKey },
      (state, action) => { // [null, ""]
        const next = action.ctrlKey ? !state.selected : true; // [null, ""]
        return { ...state, selected: next }; // [null, ""]
      } // [null, ""]
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
      (state, action) => { // [null, ""]
        return { ...state, highlighted: action.hovering }; // [null, ""]
      } // [null, ""]
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
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
  const [state, manager] = useEmissionReducer({});

  return (
    <LineItem
      {...state}
      emitter={manager}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-01-ValueInput.js",
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
    emitter, // (action, reducer) => {}

    emitValueChange = emitter
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    emitValueChange(
      { type: "emitValueChange", value: next },
      (state, action) => {
        return { ...state, value: action.value }
      }
    )
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
  const [state, manager] = useEmissionReducer({
    value: "default text"
  });

  return (
    <ValueInput
      {...state}
      emitter={manager}
    >
    </ValueInput>
  );

};
//// [null, "foci"], "end", [""]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/08-update/a/08-${1}-${count}-02-LineItem.js",
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
    emitter, // (action, reducer) => {}

    emitSelectionChange = emitter,

    emitHoverChange = emitter
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    emitSelectionChange(
      { type: "emitSelectionChange", ctrlKey },
      (state, action) => {
        const next = action.ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };

  const handleMouseEnter = () => {
    const hovering = true;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    emitHoverChange(
      { type: "emitHoverChange", hovering },
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
  const [state, manager] = useEmissionReducer({});

  return (
    <LineItem
      {...state}
      emitter={manager}
    >
    </LineItem>
  );

};
//// [null, "foci"], "end", [""]

export default null;
