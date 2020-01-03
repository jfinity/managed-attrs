
export const bindLib = (lib, name = "React") => {
  const env = { [name]: lib };
  return {
    useManagedAttrs: useManagedAttrs.bind(env)
  };
};

export function findLib(name = "React", env = this) {
  return env ? env[name] || env : this[name] || this;
}

export function useManagedAttrs(
  props,
  initialState = {},
  { manager = "manager" } = {}
) {
  const { useState, useRef } = findLib("React", this);

  const [state, setState] = useState(initialState);
  const ref = useRef(null);

  ref.current = ref.current || {
    manageState: conformSetState(setState)
  };

  const manageState = props[manager] || ref.current.manageState;

  return [effective(props, state), manageState, { state }];
}

export const conformSetState = setState => {
  return (details, producer = Array.isArray(details) ? null : produceState) => {
    if (typeof producer === "function") {
      setState(lastState => {
        const nextState = producer(lastState, details);
        return nextState;
      });
      return true;
    }
    return false;
  };
};

export const produceState = (value, edit) => {
  const kind = Array.isArray(edit) ? "array" : typeof (edit || undefined);

  switch (kind) {
    case "function": {
      return edit(value) || value || {};
    }
    case "object": {
      return Object.assign({}, value, edit);
    }
    default: {
      return value || {};
    }
  }
};

export const effective = (...objs) => {
  let read = objs.length ? -2 : -1;
  const value = objs.length ? {} : undefined;

  for (let at = 0; at < objs.length; at += 1) {
    const keys =
      typeof (objs[at] || undefined) === "object" && !Array.isArray(objs[at])
        ? Object.keys(objs[at])
        : [];

    for (let index = 0; index < keys.length; index += 1) {
      const name = keys[index];

      if (value[name] === undefined && objs[at][name] !== undefined) {
        value[name] = objs[at][name];
        read = read === at || read === -2 ? at : -1;
      }
    }
  }

  read = read === -2 ? 0 : read; // prefer objs[0] over "keyless" value
  return read < 0 ? value : objs[read]; // prefer original over "duplicate"
};

export const generateState = (lastState, details, producer) => {
  const kind = Array.isArray(producer)
    ? "array"
    : typeof (producer || undefined);

  switch (kind) {
    case "function": {
      return producer(lastState, details, generateState);
    }
    case "array": {
      let nextState = lastState;
      for (let at = 0; at < producer.length; at += 1) {
        nextState = generateState(nextState, details, producer[at]);
      }
      return nextState;
    }
    default: {
      return lastState;
    }
  }
};

export const sequence = (...recursiveArrayOfProducers) => {
  return (lastState, details) =>
    generateState(lastState, details, recursiveArrayOfProducers);
};
