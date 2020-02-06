export default prefs/*json*/`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;





export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "column": "CodecField",
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
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Declare functional component",
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", [""]

export const CodecField = props => {
};

// [null, "foci"], "end", [""]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Render some JSX",
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const CodecField = props => {
  return ( // [""]
    <span>
      <BasicButton>Encode</BasicButton>
      <ValueInput></ValueInput>
      <BasicButton>Decode</BasicButton>
    </span>
  ); // [""]
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Consume props",
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const CodecField = props => {
  const { // [""]
  } = props; // [""]

  return (
    <span>
      <BasicButton>Encode</BasicButton>
      <ValueInput></ValueInput>
      <BasicButton>Decode</BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Retrieve non-callback props",
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const CodecField = props => {
  const {
    encode = encodeURI, // [""]
    decode = decodeURI, // [""]
  } = props;

  return (
    <span>
      <BasicButton>Encode</BasicButton>
      <ValueInput></ValueInput>
      <BasicButton>Decode</BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Retrieve non-callback props",
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {}, // [""]
    encoderProps = {},
    decoderProps = {}, // [""]
  } = props;

  return (
    <span>
      <BasicButton>Encode</BasicButton>
      <ValueInput></ValueInput>
      <BasicButton>Decode</BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Pass props to children",
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},
  } = props;

  return (
    <span>
      <BasicButton {...encoderProps}> // [""]
        Encode
      </BasicButton>
      <ValueInput {...fieldProps}>
      </ValueInput>
      <BasicButton {...decoderProps}>
        Decode
      </BasicButton> // [""]
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Retrieve callback props",
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"

export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},

    stateManager, // (action, reducer) => {} // [""]
  } = props;

  return (
    <span>
      <BasicButton {...encoderProps}>
        Encode
      </BasicButton>
      <ValueInput {...fieldProps}>
      </ValueInput>
      <BasicButton {...decoderProps}>
        Decode
      </BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Listen for child events",
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"



export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},

    stateManager, // (action, reducer) => {}
  } = props;

  const fieldManager = (action, reducer) => { // [""]
  };

  const encoderManager = (action, reducer) => {
  };

  const decoderManager = (action, reducer) => {
  }; // [""]

  return (
    <span>
      <BasicButton {...encoderProps}>
        Encode
      </BasicButton>
      <ValueInput {...fieldProps}>
      </ValueInput>
      <BasicButton {...decoderProps}>
        Decode
      </BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Listen for child events",
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"],
        ["direct"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"



export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},

    stateManager, // (action, reducer) => {}
  } = props;

  const fieldManager = (action, reducer) => { // ["pin"], ["direct"]
  }; // ["direct"]

  const encoderManager = (action, reducer) => {
  };

  const decoderManager = (action, reducer) => {
  }; // ["pin"]

  return (
    <span>
      <BasicButton {...encoderProps} stateManager={encoderManager}> // [null, ""]
        Encode
      </BasicButton>
      <ValueInput {...fieldProps} stateManager={fieldManager}> // [null, ""]
      </ValueInput>
      <BasicButton {...decoderProps} stateManager={decoderManager}> // [null, ""]
        Decode
      </BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Adapt signature from child to parent state manager",
     "column": "CodecField",
     "code": {
      "review": [
        ["note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"



export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},

    stateManager, // (action, reducer) => {}
  } = props;

  const fieldManager = (action, reducer) => { // ["pin"]
    stateManager(action, lastState => { // [""]
      const nextState = lastState;
      return nextState;
    }); // [""]
  }; // ["pin"]

  const encoderManager = (action, reducer) => {
  };

  const decoderManager = (action, reducer) => {
  };

  return (
    <span>
      <BasicButton {...encoderProps} stateManager={encoderManager}>
        Encode
      </BasicButton>
      <ValueInput {...fieldProps} stateManager={fieldManager}>
      </ValueInput>
      <BasicButton {...decoderProps} stateManager={decoderManager}>
        Decode
      </BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Adapt signature from child to parent state manager",
     "column": "CodecField",
     "code": {
      "review": [
        ["note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"



export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},

    stateManager, // (action, reducer) => {}
  } = props;

  const fieldManager = (action, reducer) => { // ["pin"]
    stateManager(action, lastState => { // [""]
      const nextProps = reducer(lastState.fieldProps, action);
      const nextState = lastState;
      return nextState;
    }); // [""]
  }; // ["pin"]

  const encoderManager = (action, reducer) => {
  };

  const decoderManager = (action, reducer) => {
  };

  return (
    <span>
      <BasicButton {...encoderProps} stateManager={encoderManager}>
        Encode
      </BasicButton>
      <ValueInput {...fieldProps} stateManager={fieldManager}>
      </ValueInput>
      <BasicButton {...decoderProps} stateManager={decoderManager}>
        Decode
      </BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Adapt signature from child to parent state manager",
     "column": "CodecField",
     "code": {
      "review": [
        ["note", "", "pin"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"



export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},

    stateManager, // (action, reducer) => {}
  } = props;

  const fieldManager = (action, reducer) => { // ["pin"]
    stateManager(action, lastState => { // [""]
      const nextProps = reducer(lastState.fieldProps, action);
      const nextState = { ...lastState, fieldProps: nextProps };
      return nextState;
    }); // [""]
  }; // ["pin"]

  const encoderManager = (action, reducer) => {
  };

  const decoderManager = (action, reducer) => {
  };

  return (
    <span>
      <BasicButton {...encoderProps} stateManager={encoderManager}>
        Encode
      </BasicButton>
      <ValueInput {...fieldProps} stateManager={fieldManager}>
      </ValueInput>
      <BasicButton {...decoderProps} stateManager={decoderManager}>
        Decode
      </BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Adapt signature from child to parent state manager",
     "column": "CodecField",
     "code": {
      "review": [
        ["note", "", "pin"],
        ["direct1", "direct2", "direct3", "direct4", "direct5", "direct6"],
        ["direct7"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"



export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},

    stateManager, // (action, reducer) => {}
  } = props;

  const fieldManager = (action, reducer) => { // ["pin"]
    stateManager(action, lastState => {
      const nextProps = reducer(lastState.fieldProps, action); // ["direct1", "fieldProps"]
      const nextState = { ...lastState, fieldProps: nextProps }; // ["direct2", "fieldProps"]
      return nextState;
    });
  }; // ["pin"]

  const encoderManager = (action, reducer) => { // [""], ["direct7"]
    stateManager(action, lastState => {
      const nextProps = reducer(lastState.encoderProps, action); // ["direct3", "encoderProps"]
      const nextState = { ...lastState, encoderProps: nextProps }; // ["direct4", "encoderProps"]
      return nextState;
    });
  }; // ["direct7"]

  const decoderManager = (action, reducer) => {
    stateManager(action, lastState => {
      const nextProps = reducer(lastState.decoderProps, action); // ["direct5", "decoderProps"]
      const nextState = { ...lastState, decoderProps: nextProps }; // ["direct6", "decoderProps"]
      return nextState;
    });
  }; // [""]

  return (
    <span>
      <BasicButton {...encoderProps} stateManager={encoderManager}>
        Encode
      </BasicButton>
      <ValueInput {...fieldProps} stateManager={fieldManager}>
      </ValueInput>
      <BasicButton {...decoderProps} stateManager={decoderManager}>
        Decode
      </BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "title": "Adapt signature from child to parent state manager",
     "column": "CodecField",
     "code": {
      "review": [
        ["note", "", "pin"],
        ["direct1"],
        ["note", "", "pin"],
        ["direct2"]
      ]
    }
  }
}
`;
// [null, "foci"], "start"



export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},

    stateManager, // (action, reducer) => {}
  } = props;

  const fieldManager = (action, reducer) => {
    stateManager(action, lastState => {
      const nextProps = reducer(lastState.fieldProps, action);
      const nextState = { ...lastState, fieldProps: nextProps };
      return nextState;
    });
  };

  const encoderManager = (action, reducer) => { // [null, "pin"]
    if (action.type === "onClick") { // [""]
      return stateManager(action, lastState => {
        const lastValue = lastState.fieldProps ? lastState.fieldProps.value : "";
        const nextValue = encode(lastValue); // ["direct1"]
        const nextProps = { ...lastState.fieldProps, value: nextValue };
        return { ...lastState, fieldProps: nextProps };
      });
    } // [""]

    stateManager(action, lastState => {
      const nextProps = reducer(lastState.encoderProps, action);
      const nextState = { ...lastState, encoderProps: nextProps };
      return nextState;
    });
  }; // [null, "pin"]

  const decoderManager = (action, reducer) => { // ["direct2"]
    stateManager(action, lastState => {
      const nextProps = reducer(lastState.decoderProps, action);
      const nextState = { ...lastState, decoderProps: nextProps };
      return nextState;
    });
  }; // ["direct2"]

  return (
    <span>
      <BasicButton {...encoderProps} stateManager={encoderManager}>
        Encode
      </BasicButton>
      <ValueInput {...fieldProps} stateManager={fieldManager}>
      </ValueInput>
      <BasicButton {...decoderProps} stateManager={decoderManager}>
        Decode
      </BasicButton>
    </span>
  );
};

// [null, "foci"], "end"
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "column": "CodecField",
     "code": {
      "review": [
        ["note", "", "pin"],
        ["direct"],
        ["f2f"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]





export const CodecField = props => {
  const {
    encode = encodeURI,
    decode = decodeURI,

    fieldProps = {},
    encoderProps = {},
    decoderProps = {},

    stateManager, // (action, reducer) => {}
  } = props;

  const fieldManager = (action, reducer) => {
    stateManager(action, lastState => {
      const nextProps = reducer(lastState.fieldProps, action);
      const nextState = { ...lastState, fieldProps: nextProps };
      return nextState;
    });
  };

  const encoderManager = (action, reducer) => {
    if (action.type === "onClick") {
      return stateManager(action, lastState => {
        const lastValue = lastState.fieldProps ? lastState.fieldProps.value : "";
        const nextValue = encode(lastValue);
        const nextProps = { ...lastState.fieldProps, value: nextValue };
        return { ...lastState, fieldProps: nextProps };
      });
    }

    stateManager(action, lastState => {
      const nextProps = reducer(lastState.encoderProps, action);
      const nextState = { ...lastState, encoderProps: nextProps };
      return nextState;
    });
  };

  const decoderManager = (action, reducer) => { // [null, "pin"]
    if (action.type === "onClick") { // [""]
      return stateManager(action, lastState => {
        const lastValue = lastState.fieldProps ? lastState.fieldProps.value : "";
        const nextValue = decode(lastValue); // ["direct"]
        const nextProps = { ...lastState.fieldProps, value: nextValue };
        return { ...lastState, fieldProps: nextProps };
      });
    } // [""]

    stateManager(action, lastState => {
      const nextProps = reducer(lastState.decoderProps, action);
      const nextState = { ...lastState, decoderProps: nextProps };
      return nextState;
    });
  }; // [null, "pin"]

  return (
    <span>
      <BasicButton {...encoderProps} stateManager={encoderManager}>
        Encode
      </BasicButton>
      <ValueInput {...fieldProps} stateManager={fieldManager}>
      </ValueInput>
      <BasicButton {...decoderProps} stateManager={decoderManager}>
        Decode
      </BasicButton>
    </span>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "column": "CodecField",
     "code": {
      "review": [
        ["f2f"]
      ]
    }
  }
}
`;
// [null, "foci"], "start", ["f2f"]

export const App = () => {
  const [state, manageState] = useManagedState(
    {}
  );

  return (
    <CodecField
      {...state}
      stateManager={manageState}
    >
    </CodecField>
  );
};

// [null, "foci"], "end", ["f2f"]
export default null;



export default keyframe/*json*/`{
  "path": "./${foldername}/04-consumer/a/04-${1}-${count}-03-CodecField.js",
  "context": {
     "column": "CodecField",
     "code": {
      "review": [
        ["foci", "note", "", "pin"]
      ]
    }
  }
}
`;




export default null;
