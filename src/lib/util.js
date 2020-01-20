export function fieldUpdater(
  field,
  reducer = lastValue => lastValue,
  {
    details = customDetails => customDetails,
    value = (lastState, [customDetails, field]) => lastState[field]
  } = {}
) {
  const env = this || {};
  const { produce = fn => fn } = env.immer || {};
  const clarifyPatches = typeof (env.immer && env.immer.produce) !== "function";

  return produce((lastState, customDetails) => {
    const lastValue = value(lastState, [customDetails, field]);
    const nextValue = reducer(lastValue, details(customDetails));

    const nextState = clarifyPatches ? lastState : Object.assign({}, lastState);
    nextState[field] = nextValue;
    return nextState;
  });
}

export function fieldManager(
  field,
  manager,
  {
    details = (fieldDetails, fieldReducer) => fieldDetails,
    value = (lastState, [customDetails, field]) => lastState[field],
    preventDefault = false,
    recordPatches = false
  } = {},
  update = (lastState, [customDetails, field, nextValue]) => lastState
) {
  const env = this || {};
  const { produce = fn => fn, produceWithPatches } = env.immer || {};
  const clarifyPatches = typeof (env.immer && env.immer.produce) !== "function";

  if (preventDefault && typeof update !== "function") {
    throw new Error("Either use an update function or do not preventDefault.");
  }

  if (recordPatches && typeof produceWithPatches !== "function") {
    throw new Error("To recordPatches, produceWithPatches is required.");
  }

  return (fieldDetails, fieldReducer) => {
    return manager(
      details(fieldDetails, fieldReducer),
      produce((lastState, customDetails) => {
        const lastValue = value(lastState, [customDetails, field]);

        const result =
          // NOTE: closure here couples nextValue to original details/reducer
          recordPatches
            ? produceWithPatches(lastValue, fieldValue => {
                return fieldReducer(fieldValue, fieldDetails);
              })
            : [fieldReducer(lastValue, fieldDetails), undefined, undefined];

        const [nextValue, patches, inverted] = result;

        const nextState =
          clarifyPatches || preventDefault
            ? lastState
            : Object.assign({}, lastState);

        if (!preventDefault) {
          nextState[field] = nextValue;
        }

        return update(
          nextState,
          [customDetails, field, nextValue, patches, inverted],
          lastValue,
          [fieldDetails, fieldReducer]
        );
      })
    );
  };
}
