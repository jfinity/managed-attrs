export default prefs.json`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"],
        ["pin"],
        ["render"],
        ["render"],
        ["non"],
        ["non"],
        ["non"],
        ["non"],
        ["non"],
        ["foci", "subtitle"]
      ]
    }
  }
}
`;

//// [""], [null, "pin"]
export const LineItem = props => {
  const { // ["non"]
    children,

    selected = false,

    highlighted = false
  } = props; // ["non"]
//// [null, "foci"], "start"
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
//// [null, "foci"], "end"
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

  return ( // ["render"]
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
  ); // ["render"]

};
//// [""], [null, "pin"]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
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
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start", [""]
export const ItemList = props => {
};
//// [null, "foci"], "end", [""]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  // Render some JSX // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  return ( // [""]
    <div>
    </div>
  ); // [""]
  // Render some JSX // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  return (
    <div>
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const { // [""]
    // Retrieve non-driver props
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
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [], // [""]
    // Implementation details skipped
    ...rest // [""]
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
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  return (
    <div>
      { // [""]
        items.map(each => {
          const { key } = each;
        })
      } // [""]
    </div>
  );
  // Consume props // [null, "subtitle"]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key); // [""]
          const { children, selected, highlighted } = itemProps; // [""]
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) { // [null, ""]
    // Distracting business logic // [null, ""]
  } // [null, ""]
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return ( // [""]
            <LineItem
              key={key}
              selected={selected}
              highlighted={highlighted}
            >
              {children}
            </LineItem>
          ); // [""]
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["foci", "subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const { // [""]
    // Retrieve driver props
  } = props; // [""]

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key}
              selected={selected}
              highlighted={highlighted}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["subtitle", "", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {} // [""]
  } = props;
  // Adapt driving from child to parent // [null, ""]
  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key}
              selected={selected}
              highlighted={highlighted}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => { // [""]
  }; // [""]

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter} // [null, ""]
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver( // [""]
      action,
      lastState => {
        const nextState = lastState;

        return nextState;
      }
    ); // [""]
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      action,
      lastState => {
        const lastItemProps = getItemProps(lastState, key); // [""]
        const nextItemProps = reducer(lastItemProps, action);
        // const { selected } = nextItemProps; // [""]
        const nextState = lastState;

        return nextState;
      }
    );
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      action,
      lastState => {
        const lastItemProps = getItemProps(lastState, key);
        const nextItemProps = reducer(lastItemProps, action);
        // const { selected } = nextItemProps;
        const nextState = putItemProps(lastState, key, nextItemProps); // [null, ""]

        return nextState;
      }
    );
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      action,
      lastState => {
        const lastItemProps = getItemProps(lastState, key);
        const nextItemProps = reducer(lastItemProps, action);
        // const { selected } = nextItemProps;
        const nextState = putItemProps(lastState, key, nextItemProps); // [null, "pin"]

        return nextState;
      }
    );

    return; // [""]

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    } // [""]
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin", "key"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      action,
      lastState => {
        const lastItemProps = getItemProps(lastState, key); // ["pin", "key"]
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, key, nextItemProps); // ["key", "key"]

        return nextState;
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin", "key"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      action,
      lastState => {
        const lastItemProps = getItemProps(lastState, key); // ["pin", "key"]
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, key, nextItemProps); // ["key", "key"]

        return nextState;
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key} // [null, "pin"]
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin", "key"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      action,
      lastState => {
        const lastItemProps = getItemProps(lastState, action.key); // ["", "action.key"]
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, action.key, nextItemProps); // ["key", "action.key"]

        return nextState;
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              key={key} // [null, "pin"]
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/a/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin", "key"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      action,
      lastState => {
        const lastItemProps = getItemProps(lastState, action.key); // ["pin", "action.key"]
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, action.key, nextItemProps); // ["key", "action.key"]

        return nextState;
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              KEY={key} // [""]
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/b/09-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "subtitle", ""]
      ]
    }
  }
}
`;

//// [null, "pin"]
export const LineItem = props => {
  const { // ["non"]
    children,

    selected = false,

    highlighted = false
  } = props; // ["non"]
//// [null, "foci"], "start"
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
//// [null, "foci"], "end"
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

  return ( // ["render"]
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
  ); // ["render"]

};
//// [null, "pin"]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/09-compose/b/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin", "key"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      action,
      lastState => {
        const lastItemProps = getItemProps(lastState, action.key); // ["pin", "action.key"]
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, action.key, nextItemProps); // ["key", "action.key"]

        return nextState;
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              KEY={key} // [null, "pin"]
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/b/09-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "subtitle", ""]
      ]
    }
  }
}
`;

//// [null, "pin"]
export const LineItem = props => {
  const { // ["non"]
    children,

    selected = false,

    highlighted = false
  } = props; // ["non"]
//// [null, "foci"], "start"
  const {
    KEY, // [null, ""]
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey }, // [""]
      (state, action) => {
        const next = action.ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };
//// [null, "foci"], "end"
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

  return ( // ["render"]
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
  ); // ["render"]

};
//// [null, "pin"]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/b/09-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "subtitle", ""],
        ["foci", "subtitle", "action"]
      ]
    }
  }
}
`;

//// [null, "pin"]
export const LineItem = props => {
  const { // ["non"]
    children,

    selected = false,

    highlighted = false
  } = props; // ["non"]
//// [null, "foci"], "start"
  const {
    KEY,
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey, key: KEY }, // ["", "key", "KEY"]
      (state, action) => {
        const next = action.ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };
//// [null, "foci"], "end"
  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering }, // [null, "action"]
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering }, // [null, "action"]
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };

  return ( // ["render"]
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
  ); // ["render"]

};
//// [null, "pin"]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/b/09-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "subtitle", "action1", "action2"]
      ]
    }
  }
}
`;

//// [null, "pin"]
export const LineItem = props => {
  const { // ["non"]
    children,

    selected = false,

    highlighted = false
  } = props; // ["non"]
//// [null, "foci"], "start"
  const {
    KEY,
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey, key: KEY },
      (state, action) => {
        const next = action.ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };
//// [null, "foci"], "end"
  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering, key: KEY }, // [null, ""], ["action1", "key", "KEY"]
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering, key: KEY }, // [null, ""], ["action2", "key", "KEY"]
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };

  return ( // ["render"]
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
  ); // ["render"]

};
//// [null, "pin"]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/b/09-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["subtitle", "action", ""]
      ]
    }
  }
}
`;

//// [null, "pin"]
export const ValueInput = props => {
  const {
    value = ""
  } = props;
  // KEY any other component actions // ["subtitle"]
  const {
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next }, // ["action"]
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
export const LineItem = props => {
  const { // ["non"]
    children,

    selected = false,

    highlighted = false
  } = props; // ["non"]
//// [null, "foci"], "start"
  const {
    KEY,
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey, key: KEY },
      (state, action) => {
        const next = action.ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };
//// [null, "foci"], "end"
  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering, key: KEY },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering, key: KEY },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };

  return ( // ["render"]
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
  ); // ["render"]

};
//// [null, "pin"]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/b/09-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["subtitle", "action", ""]
      ]
    }
  }
}
`;

//// [null, "pin"]
export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    KEY, // [null, ""]
    driver, // (action, reducer) => {}

    whenValueChange = driver
  } = props;

  const handleChange = event => {
    const next = event.target.value;
    whenValueChange(
      { type: "whenValueChange", value: next, key: KEY }, // ["", "key", "KEY"]
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
export const LineItem = props => {
  const { // ["non"]
    children,

    selected = false,

    highlighted = false
  } = props; // ["non"]
//// [null, "foci"], "start"
  const {
    KEY,
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey, key: KEY },
      (state, action) => {
        const next = action.ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };
//// [null, "foci"], "end"
  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering, key: KEY },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering, key: KEY },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };

  return ( // ["render"]
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
  ); // ["render"]

};
//// [null, "pin"]

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/c/09-${1}-${count}-02-LineItem.js",
  "context": {
     "column": "LineItem",
     "code": {
      "review": [
        ["foci", "subtitle", ""]
      ]
    }
  }
}
`;

//// [null, "pin"]
export const LineItem = props => {
  const { // ["non"]
    children,

    selected = false,

    highlighted = false
  } = props; // ["non"]
//// [null, "foci"], "start"
  const {
    KEY,
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;

  const handleClick = event => {
    const { ctrlKey } = event;
    whenSelectionChange(
      { type: "whenSelectionChange", ctrlKey, key: KEY },
      (state, action) => {
        const next = action.ctrlKey ? !state.selected : true;
        return { ...state, selected: next };
      }
    );
  };
//// [null, "foci"], "end"
  const handleMouseEnter = () => {
    const hovering = true;
    whenHoverChange(
      { type: "whenHoverChange", hovering, key: KEY },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };
  const handleMouseLeave = () => {
    const hovering = false;
    whenHoverChange(
      { type: "whenHoverChange", hovering, key: KEY },
      (state, action) => {
        return { ...state, highlighted: action.hovering };
      }
    );
  };

  return ( // ["render"]
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
  ); // ["render"]

};
//// [null, "pin"]

export default null;

export default keyframe.json`{
  "path": "./${foldername}/09-compose/c/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin", "key"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      action, // [null, "pin"]
      lastState => {
        const lastItemProps = getItemProps(lastState, action.key); // ["pin", "action.key"]
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, action.key, nextItemProps); // ["key", "action.key"]

        return nextState;
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              KEY={key}
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/c/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin", "key"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    KEY, // [null, ""]
    driver, // (action, reducer) => {}
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver(
      { ...action, key: KEY, itemKey: action.key }, // [""]
      lastState => {
        const lastItemProps = getItemProps(lastState, action.key); // ["pin", "action.key"]
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, action.key, nextItemProps); // ["key", "action.key"]

        return nextState;
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              KEY={key}
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/c/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    KEY,
    driver, // (action, reducer) => {}

    whenSelectionChange = driver, // [""]

    whenHoverChange = driver // [""]
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    driver( // ["pin", "driver"]
      { ...action, key: KEY, itemKey: action.key },
      lastState => {
        const lastItemProps = getItemProps(lastState, action.key);
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, action.key, nextItemProps);

        return nextState;
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              KEY={key}
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/c/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    KEY,
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    const connections = { // [""]
      whenSelectionChange,
      whenHoverChange
    };

    const driving = connections[action.type] || driver;

    driving( // ["", "driving"]
      { ...action, key: KEY, itemKey: action.key },
      lastState => {
        const lastItemProps = getItemProps(lastState, action.key);
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, action.key, nextItemProps);

        return nextState;
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              KEY={key}
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;



export default keyframe.json`{
  "path": "./${foldername}/09-compose/c/09-${1}-${count}-03-ItemList.js",
  "context": {
     "column": "ItemList",
     "code": {
      "review": [
        ["", "pin"]
      ]
    }
  }
}
`;

//// [null, "foci"], "start"
export const ItemList = props => {
  const {
    items = [],

    ...rest
  } = props;

  const {
    KEY,
    driver, // (action, reducer) => {}

    whenSelectionChange = driver,

    whenHoverChange = driver
  } = props;
  // Adapt driving from child to parent // [null, "pin"]
  const connecter = (action, reducer) => {
    const connections = {
      whenSelectionChange,
      whenHoverChange
    };

    const driving = connections[action.type] || driver;

    const refinements = { // [""]
      whenSelectionChange: function singleSelection(state, key) {
        // Even more implementation details
      }
    };

    const patch = refinements[action.key] || (state => state); // [""]

    driving( // ["", "driving"]
      { ...action, key: KEY, itemKey: action.key },
      lastState => {
        const lastItemProps = getItemProps(lastState, action.key);
        const nextItemProps = reducer(lastItemProps, action);

        const nextState = putItemProps(lastState, action.key, nextItemProps);

        return patch(nextState, action.key); // [null, ""]
      }
    );

    return;

    function putItemProps(implementationDetails, key, nextValue) {
      // Uninteresting business logic -- trust me...
    }
  };

  return (
    <div>
      {
        items.map(each => {
          const { key } = each;
          const itemProps = getItemProps(props, key);
          const { children, selected, highlighted } = itemProps;

          return (
            <LineItem
              KEY={key}
              key={key}
              selected={selected}
              highlighted={highlighted}
              driver={connecter}
            >
              {children}
            </LineItem>
          );
        })
      }
    </div>
  );
  // Consume props // [null, "subtitle"]
  function getItemProps(implementationDetails, key) {
    // Distracting business logic
  }
};
//// [null, "foci"], "end"

export default null;
