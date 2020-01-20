export function useManagedAttrs(initialState = {}) {
  const env = this || {};
  const { useState, useRef } = env.React || {};

  const [state, setState] = useState(initialState);
  const ref = useRef(null);

  ref.current = ref.current || {
    manageState: conformSetState(setState)
  };

  return [state, ref.current.manageState];
}

export const conformSetState = setState => {
  return function manageState(action = this, reducer = updateState) {
    if (arguments.length !== 1 && typeof reducer === "function") {
      setState(lastState => {
        const nextState = reducer(lastState, action);
        return nextState;
      });
      return true;
    }
    return false;
  };
};

export const updateState = (state, updater) => {
  const kind = Array.isArray(updater) ? "array" : typeof (updater || undefined);

  switch (kind) {
    case "function": {
      return updater(state) || state || {};
    }
    case "object": {
      return Object.assign({}, state, updater);
    }
    default: {
      return state || {};
    }
  }
};

export const generateState = (lastState, action, updater) => {
  const kind = Array.isArray(updater) ? "array" : typeof (updater || undefined);

  switch (kind) {
    case "function": {
      return updater(lastState, action);
    }
    case "array": {
      let nextState = lastState;
      for (let at = 0; at < updater.length; at += 1) {
        nextState = generateState(nextState, action, updater[at]);
      }
      return nextState;
    }
    default: {
      return lastState;
    }
  }
};

export const sequence = (...recursiveArrayOfReducers) => {
  return (lastState, action) =>
    generateState(lastState, action, recursiveArrayOfReducers);
};
