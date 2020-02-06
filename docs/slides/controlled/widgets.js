import React, { useState, useRef } from "react";

export const useManagedState = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const ref = useRef(null);

  ref.current = ref.current
    ? ref.current
    : (action, reducer) => {
        if (typeof reducer !== "function") return;

        setState(lastState => {
          const nextState = reducer(lastState, action);
          return nextState;
        });
      };

  return [state, ref.current, setState];
};

export const ValueInput = props => {
  const {
    value = "",

    stateManager, // (action, reducer) => {}

    onChange = stateManager
  } = props;

  const handleChange = event =>
    onChange(
      { type: "onChange", value: event.target.value },
      (state, action) => {
        const next = action.value;
        return { ...state, value: next };
      }
    );

  return <input value={value} onChange={handleChange}></input>;
};

export const InputDemo = () => {
  const [state, manageState] = useManagedState({ value: "default text" });

  return <ValueInput {...state} stateManager={manageState} />;
};

export const BasicButton = props => {
  const {
    children = "\u00A0",

    highlighted = false,

    stateManager, // (action, reducer) => {}

    onMouseEnter = stateManager,
    onMouseLeave = stateManager,

    onClick = stateManager
  } = props;

  const handleMouseEnter = () =>
    onMouseEnter({ type: "onMouseEnter", hovering: true }, state => {
      const next = true;
      return { ...state, highlighted: next };
    });
  const handleMouseLeave = () =>
    onMouseLeave({ type: "onMouseLeave", hovering: false }, state => {
      const next = false;
      return { ...state, highlighted: next };
    });

  const handleClick = () => onClick({ type: "onClick" });

  return (
    <button
      style={
        highlighted
          ? { borderRadius: "3px", background: "lightblue" }
          : { borderRadius: "3px" }
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export const ButtonDemo = ({ children }) => {
  const [state, manageState] = useManagedState({});

  return (
    <BasicButton {...state} stateManager={manageState}>
      {children}
    </BasicButton>
  );
};

export const CodecField = props => {
  const { encode, decode, fieldProps, encoderProps, decoderProps, stateManager } = props;

  const fieldManager = (action, reducer) => {
    stateManager(action, lastState => {
      const nextProps = reducer(lastState.fieldProps, action);
      return { ...lastState, fieldProps: nextProps };
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
      return { ...lastState, encoderProps: nextProps };
    });
  };

  const decoderManager = (action, reducer) => {
    if (action.type === "onClick") {
      return stateManager(action, lastState => {
        const lastValue = lastState.fieldProps ? lastState.fieldProps.value : "";
        const nextValue = decode(lastValue);
        const nextProps = { ...lastState.fieldProps, value: nextValue };
        return { ...lastState, fieldProps: nextProps };
      });
    }

    stateManager(action, lastState => {
      const nextProps = reducer(lastState.decoderProps, action);
      return { ...lastState, decoderProps: nextProps };
    });
  };

  return (
    <>
      <BasicButton {...encoderProps} stateManager={encoderManager}>Encode</BasicButton>
      <ValueInput {...fieldProps} stateManager={fieldManager} />
      <BasicButton {...decoderProps} stateManager={decoderManager}>Decode</BasicButton>
    </>
  );
};

export const FieldDemo = () => {
  const [state, manageState] = useManagedState({
    fieldProps: { value: "hello world?" },
    encoderProps: {},
    decoderProps: {},
  });

  return (
    <CodecField
      {...state}
      stateManager={manageState}
      encode={encodeURIComponent}
      decode={decodeURIComponent}
    >
    </CodecField>
  );
};
