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
  // manageState
  return (action, updater) => {
    if (updater) {
      setState(lastState => {
        const nextState = updateState(lastState, updater, action);
        return nextState;
      });
      return true;
    }
    return false;
  };
}

export const updateState = (lastState, updater, action) => {
  const kind = Array.isArray(updater) ? "array" : typeof (updater || undefined);

  switch (kind) {
    case "function": {
      return updater(lastState, action);
    }
    case "object": {
      return Object.assign({}, lastState, updater);
    }
    case "array": {
      let nextState = lastState;
      for (let at = 0; at < updater.length; at += 1) {
        nextState = updateState(nextState, updater[at], action);
      }
      return nextState;
    }
    default: {
      return lastState;
    }
  }
};

export const sequence = (...updaters) => {
  return (lastState, action) => {
    return updateState(lastState, updaters, action);
  }
};

export const normalize = sequence;
