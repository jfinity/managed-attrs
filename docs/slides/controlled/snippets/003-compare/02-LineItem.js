export default prefs.json`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe.json`{
  "path": "./${foldername}/01-component/a/01-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
// Component Structure // [""]
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/01-component/a/01-${1}-${count}-${filename}",
  "context": {
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
};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/02-render/a/02-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  // Render some JSX // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/02-render/a/02-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  return ( // [""]
    <div>
    </div>
  ); // [""]
  // Render some JSX // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  return (
    <div>
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  const { // [""]
    // Retrieve non-callback props
  } = props; // [""]

  return (
    <div>
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const LineItem = props => {
  const {
    selected = false, // [""]

    highlighted = false // [""]
  } = props;

  return (
    <div>
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
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

  return (
    <div // [""]
      // Pass props to children
    > // [""]
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
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

  return (
    <div
      style={{ // [""]
        // Please hold your :hover critiques for now...
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }} // [""]
    >
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
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

  const { // [""]
    // Retrieve callback props
  } = props; // [""]

  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}
    >
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
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
    onClick = event => {}, // [""]

    onMouseEnter = event => {},
    onMouseLeave = event => {} // [""]
  } = props;

  return (
    <div
      style={{
        background:
          highlighted ? "lightgray" :
          selected ? "darkgray" :
          "white"
      }}
    >
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
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
      // Listen for child events // [""]
      onMouseEnter={
        onMouseEnter
      }
      onMouseLeave={
        onMouseLeave
      }
      onClick={
        onClick
      } // [""]
    >
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a/03-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
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
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-${filename}",
  "context": {
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
//// [null, "foci"], "start", [""]
export const App = () => {
  // Consume the component
};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-${filename}",
  "context": {
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
//// [null, "foci"], "start"
export const App = () => {
  return ( // [""]
    <LineItem>
    </LineItem>
  ); // [""]
  // Consume the component // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-${filename}",
  "context": {
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
//// [null, "foci"], "start"
export const App = () => {
  return (
    <LineItem // [""]
      // Pass props to the component
    > // [""]
    </LineItem>
  );
  // Consume the component // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-${filename}",
  "context": {
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
//// [null, "foci"], "start"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false); // [""]

  return (
    <LineItem
      // Pass props to the component // [null, "pin"]
    >
    </LineItem>
  );
  // Consume the component // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-${filename}",
  "context": {
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
//// [null, "foci"], "start"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <LineItem
      highlighted={highlighted} // [""]
      onMouseEnter={
      }
      // Adapt signature from callback to state manager
      onMouseLeave={
      } // [""]
    >
    </LineItem>
  );
  // Consume the component // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-${filename}",
  "context": {
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
//// [null, "foci"], "start"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onMouseEnter={
        () => setHighlighted(true) // [""]
      }
      onMouseLeave={
        () => setHighlighted(false) // [""]
      }
    >
    </LineItem>
  );
  // Consume the component // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-${filename}",
  "context": {
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
//// [null, "foci"], "start"
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false); // [""]

  return (
    <LineItem
      highlighted={highlighted}
      onMouseEnter={
        () => setHighlighted(true)
      }
      onMouseLeave={
        () => setHighlighted(false)
      }
      // Pass props to the component // [null, ""]
    >
    </LineItem>
  );
  // Consume the component // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-${filename}",
  "context": {
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
//// [null, "foci"], "start"
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

      selected={selected} // [""]
      onClick={
        // Adapt signature from callback to state manager
      } // [""]
    >
    </LineItem>
  );
  // Consume the component // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-${filename}",
  "context": {
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
//// [null, "foci"], "start"
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
        event => setSelected( // [""]
          event.ctrlKey ? !selected : true
        ) // [""]
      }
    >
    </LineItem>
  );
  // Consume the component // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/04-consumer/b/04-${1}-${count}-${filename}",
  "context": {
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
  "path": "./${foldername}/04-consumer/b/04-${1}-${count}-${filename}",
  "context": {
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
//
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
  "path": "./${foldername}/05-consumer/a/05-${1}-${count}-${filename}",
  "context": {
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
  "path": "./${foldername}/05-consumer/a/05-${1}-${count}-${filename}",
  "context": {
    "code": {
      "review": [
        ["foci", "subtitle", "", "pin"],
        ["duped"],
        ["f2f"]
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
//// [null, "foci"], "start", ["f2f"]
export const App = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onMouseEnter={
        () => setHighlighted(true) // [null, "duped"]
      }
      onMouseLeave={
        () => setHighlighted(false) // [null, "duped"]
      }

      selected={selected}
      onClick={
        event => setSelected( // [null, "duped"]
          event.ctrlKey ? !selected : true // [null, "duped"]
        )// [null, "duped"]
      }
    >
    </LineItem>
  );

};
//
export const Lib = () => { // [""]
  const [highlighted, setHighlighted] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <LineItem
      highlighted={highlighted}
      onMouseEnter={
        () => setHighlighted(true) // [null, "duped"]
      }
      onMouseLeave={
        () => setHighlighted(false) // [null, "duped"]
      }
      // Drives want of uncontrolled components // [null, "duped"]
      selected={selected}
      onClick={
        event => setSelected( // [null, "duped"]
          event.ctrlKey ? !selected : true // [null, "duped"]
        ) // [null, "duped"]
      }
    >
    </LineItem>
  );

}; // [""]
//// [null, "foci"], "end", ["f2f"]

export default null;



