
export default keyframe.json`{
  "path": "./${foldername}/01-component/a-${basename}/01-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const LineItem = () => {
  // render some JSX
  return (
    <>
    </>
  );
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/02-render/a-${basename}/02-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const LineItem = () => {
  // render some JSX
  return (
    <div>
    </div>
  );
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const LineItem = props => {
  // render some JSX
  return (
    <div>
    </div>
  );
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

export const LineItem = props => {
  const {
    // retrieve non-callback props;
  } = props;

  const {
    // retrieve callback props;
  } = props;

  return (
    <div>
    </div>
  );
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

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
        // please hold your :hover comments for now
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

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

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
        // please hold your :hover comments for now
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

export const App = () => {
  const [selected, setSelected] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

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
      onChange={
        event => setSelected(
          event.ctrlKey ? !selected : true
        )
      }
    >
    </LineItem>
  );
};

export default null;



export default keyframe.json`{
  "path": "./${foldername}/03-props/a-${basename}/03-${count}-${filename}",
  "context": {
    "digest": {
      "review": [
        []
      ]
    }
  }
}
`;

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
        // please hold your :hover comments for now
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

export const App = () => {
  const [selected, setSelected] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

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
      onChange={
        event => setSelected(
          event.ctrlKey ? !selected : true
        )
      }
    >
    </LineItem>
  );
};

// drives want of uncontrolled components
export const Lib = () => {
  const [selected, setSelected] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

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
      onChange={
        event => setSelected(
          event.ctrlKey ? !selected : true
        )
      }
    >
    </LineItem>
  );
};

export default null;
