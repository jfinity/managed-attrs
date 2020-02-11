// attrs are the subset of "props" (passed to children) that are "stateful"
export function useManagedAttrs(initialState = {}) {
  const env = this || {};
  const { useState, useRef } = env.React || {};

  const [attrs, setState] = useState(initialState);
  const ref = useRef(null);

  ref.current = ref.current || {
    manageAttrs: manageSetState(setState),
    spreadAttrs: extendSetState(setState)
  };

  return [attrs, ref.current.manageAttrs, ref.current.spreadAttrs];
}

export const manageSetState = setState => {
  // manageAttrs
  return (action, reducer) => {
    if (typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
      return true;
    }
    return false;
  };
};

// prefer action.spread over action to encourage action.type and other metadata
export const spreadReducer = (lastState, { spread: updater } = {}) => {
  return maybeExtend(lastState, updater);
};

export const maybeExtend = (lastState, updater) => {
  const spread = typeof updater === "function" ? updater(lastState) : updater;
  return spread ? Object.assign({}, lastState, spread) : lastState;
};

export const extendSetState = setState => {
  // spreadAttrs
  return updater => {
    if (updater) {
      setState(lastState => {
        const nextState = maybeExtend(lastState, updater);
        return nextState;
      });
      return true;
    }
    return false;
  };
};

export const resolveNext = (lastState, action, reducers) => {
  if (Array.isArray(reducers)) {
    let nextState = lastState;

    for (let index = 0; index < reducers.length; index += 1) {
      nextState = resolveNext(nextState, action, reducers[index]);
    }

    return nextState;
  } else if (typeof reducers === "function") {
    return reducers(lastState, action);
  } else {
    return lastState;
  }
};

export const reducerPipeline = (...reducersOrNestedArraysThereof) => {
  return (lastState, action) => {
    return resolveNext(lastState, action, reducersOrNestedArraysThereof);
  };
};
