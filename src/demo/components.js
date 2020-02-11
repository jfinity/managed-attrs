import React from "react";
import { reducerPipeline } from "../lib/react";

const produce = fn => fn;

export const ValueInput = props => {
  const { KEY, value = "", nodeProps } = props;
  // emitter should be sufficient to satisfy any callback emitted event
  const { emitter, emitChange = emitter } = props;

  // useCallback(adaptChange(KEY, { emitChange }), [KEY, emitChange]);
  const handleChange = ({ ...event }) => { // event.persist()
    const { value } = event.target;

    emitChange(
      // interrogable action record describing the event
      { value, event, type: "emitChange", key: KEY },
      // opaque means to realize the *anticipated* changes to "stateful" props
      produce((state, action) => {
        return { ...state, value: action.value };
      })
    );
  };

  return <input value={value} onChange={handleChange} {...nodeProps} />;
};

export const LineItem = props => {
  const { KEY, selected, highlighted, style, children, nodeProps } = props;
  const {
    // emitter should be sufficient to satisfy any callback emitted event
    emitter,

    emitSelectionChange = emitter,
    emitHoverChange = emitter
  } = props;

  return (
    <div
      style={{
        // please hold your :hover comments for now
        background: highlighted ? "lightgray" : selected ? "darkgray" : "white",
        ...style
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...nodeProps}
    >
      {children}
    </div>
  );

  // useCallback(adaptClick(KEY, { emitSelectionChange }));
  function handleClick({ ...event }) {
    emitSelectionChange(
      { event, type: "emitSelectionChange", key: KEY },
      // export const reduceSelectionChange = // test me
      produce((state, action) => {
        const { ctrlKey } = action.event; // anti-selection (multi-selection)

        const last = state.selected;
        const next = ctrlKey ? !last || undefined : true;
        // undefined is "false" enough
        return !next !== !last ? { ...state, selected: next } : state;
      })
    );
  }

  // useCallback(adaptMouseEnter(KEY, { emitHoverChange }));
  function handleMouseEnter({ ...event }) {
    emitHoverChange(
      { hovering: true, event, type: "emitHoverChange", key: KEY },
      // export const reduceHoverChange = // test me
      produce((state, { hovering }) => {
        const last = state.highlighted;
        const next = hovering || undefined;
        // undefined is "false" enough
        return !next !== !last ? { ...state, highlighted: next } : state;
      })
    );
  }

  // useCallback(adaptMouseLeave(KEY, { emitHoverChange }));
  function handleMouseLeave({ ...event }) {
    emitHoverChange(
      { hovering: false, event, type: "emitHoverChange", key: KEY },
      // duplicated code
      produce((state, { hovering }) => {
        const last = state.highlighted;
        const next = hovering || undefined;
        // undefined is "false" enough
        return !next !== !last ? { ...state, highlighted: next } : state;
      })
    );
  }
};

export class EMap extends Map {
  toJSON() {
    return [...this.entries()];
  }
}
// prefer instanceof Map for order preservation capabilities
export const asColumn = value => {
  return !value || value instanceof EMap ? value : new EMap(value);
};
// prefer { [column]: Map } for order preservation on per-field basis
export const asTable = value => {
  const table = {};
  const names = Object.keys(value || {});

  const ok = names.every(column => {
    table[column] = asColumn(value[column]);
    return table[column] === value[column];
  });

  return ok ? value || {} : table;
};
export const readRow = (table, key, fields = Object.keys(table || {})) => {
  const props = {};

  for (let index = 0; index < fields.length; index += 1) {
    const name = fields[index];
    const column = asColumn(table[name] || undefined);

    if (name !== "key") {
      props[name] = column && column.get(key);
    }
  }

  return props;
};
export const writeRow = (table, key, props, fields = Object.keys(props)) => {
  const match = table || {};
  let result = table || {};

  for (let index = 0; index < fields.length; index += 1) {
    const name = fields[index];
    let column =
      props[name] !== undefined || result[name]
        ? asColumn(result[name] || [])
        : result[name];

    if (props[name] !== undefined) {
      if (column === match[name] && column.get(key) !== props[name]) {
        column = asColumn([...column]);
      }
      column.set(key, props[name]);
    } else if (column) {
      if (column === match[name] && column.has(key)) {
        column = asColumn([...column]);
        column.delete(key);
      } else {
        column = result[name];
      }
    }

    result = column === match[name] ? result : { ...result };
    result[name] = column;
  }

  return result;
};

export const ItemList = props => {
  const { KEY, items = [], itemPropTable, itemBaseProps, nodeProps } = props;
  // emitter should be sufficient to satisfy any callback emitted event
  const { emitter, emitSelectionChange = emitter } = props;

  // useMemo
  const propTable = asTable(itemPropTable);
  const fields = Object.keys(propTable);

  return (
    <div {...nodeProps}>
      {items.map(itemListProps => {
        const { key } = itemListProps;
        const itemRowProps = readRow(propTable, key, fields);

        // const { selected, highlighted } = itemRowProps;
        return (
          <LineItem
            {...itemBaseProps}
            {...itemListProps}
            {...itemRowProps}
            emitSelectionChange={publishSelectionChange}
            emitter={publisher}
            KEY={key}
            key={key}
          />
        );
      })}
    </div>
  );

  // useCallback(wrapTableRow(KEY, { emitter }));
  function publisher(action, reducer) {
    const digger = old => [old, state => state];
    emitter(
      // substitute enriched action
      { ...action, itemKey: action.key, key: KEY },
      // export const bindTableRow = (action, reducer, digger) => // test me
      produce((old, { itemKey }) => {
        const digState = digger;
        const [state, buryState] = digState(old);

        const last = readRow(state.itemPropTable, itemKey);
        const next = reducer(last, action);

        const table = writeRow(state.itemPropTable, itemKey, next);

        return table === state.itemPropTable
          ? old
          : buryState({ ...state, itemPropTable: table });
      })
    );
  }

  // useCallback(wrapSelectionChange(KEY, { emitSelectionChange }));
  function publishSelectionChange(action, reducer) {
    const digger = old => [old, state => state];
    emitSelectionChange(
      // substitute enriched action
      { ...action, itemKey: action.key, key: KEY },
      // export const bindSelectionChange = (action, reducer, digger) =>
      produce(
        reducerPipeline(
          // bindTableRow(action, reducer, digger), // deduplication possible
          (old, { itemKey }) => {
            const digState = digger;
            const [state, buryState] = digState(old);

            const last = readRow(state.itemPropTable, itemKey);
            const next = reducer(last, action);

            const table = writeRow(state.itemPropTable, itemKey, next);

            return table === state.itemPropTable
              ? old
              : buryState({ ...state, itemPropTable: table });
          },
          // conditionally limit to a single selection
          (old, { itemKey, event }) => {
            const digState = digger;
            const [state, buryState] = digState(old);

            const table = state.itemPropTable;

            const last = asColumn(table.selected);
            let column = last;

            if (!event.ctrlKey && column.size > 1) {
              const selections = [...column].filter(
                ([key, selected]) => selected
              );

              if (selections.length > 1) {
                const pick = selections.findIndex(([key]) => key === itemKey);
                const entry = selections[pick < 0 ? 0 : pick];
                column = asColumn([entry]);
              }
            }

            return column === last
              ? old
              : buryState({
                  ...state,
                  itemPropTable: { ...table, selected: column }
                });
          }
        )
      )
    );
  }
};

export const EntryList = props => {
  const { KEY, inputAttrs = {}, listAttrs = {}, nodeProps } = props;

  const {
    // emitter should be sufficient to satisfy any callback emitted event
    emitter,

    emitSiblingClone = emitter,
    emitValueChange = emitter,
    emitItemAdd = emitter,

    emitHoverChange = emitter
  } = props;

  return (
    <div {...nodeProps}>
      <ValueInput
        value={inputAttrs.value}
        emitChange={publishValueChange}
        // emitter={}
        KEY={KEY}
        nodeProps={{ onKeyDown: handleKeyDown, ...inputAttrs.nodeProps }}
      />
      <ItemList
        items={listAttrs.items}
        itemPropTable={listAttrs.itemPropTable}
        itemBaseProps={{
          emitHoverChange: publishHoverChange,
          ...listAttrs.itemBaseProps
        }}
        emitter={publisher}
        KEY={KEY}
        {...listAttrs.nodeProps}
      />
    </div>
  );

  function publishHoverChange(action, reducer) {
    const digger = old => [old, state => state];
    emitHoverChange(
      { ...action, itemKey: action.key, key: KEY },
      // export const bindHoverChange = (action, reducer, digger) =>
      produce(
        reducerPipeline(
          // bindTableRow(action, reducer, tunnelListDigger(digger)),
          (old, { itemKey }) => {
            // old => [old.listAttrs, state => ({ ...old, listAttrs: state })];
            const digState = tunnelListDigger(digger); // replaces just digger;
            const [state, buryState] = digState(old);

            const last = readRow(state.itemPropTable, itemKey);
            const next = reducer(last, action);

            const table = writeRow(state.itemPropTable, itemKey, next);

            return table === state.itemPropTable
              ? old
              : buryState({ ...state, itemPropTable: table });
          },
          // enforce a single highlight
          (old, { itemKey }) => {
            // old => [old.listAttrs, state => ({ ...old, listAttrs: state })];
            const digState = tunnelListDigger(digger);
            const [state, buryState] = digState(old);

            const table = state.itemPropTable;

            const last = asColumn(table.highlighted);
            let column = last;

            if (column.size > 1) {
              const highlights = [...column].filter(
                ([key, highlighted]) => highlighted
              );

              if (highlights.length > 1) {
                const pick = highlights.findIndex(([key]) => key === itemKey);
                const entry = highlights[pick < 0 ? 0 : pick];
                column = asColumn([entry]);
              }
            }

            return column === last
              ? old
              : buryState({
                  ...state,
                  itemPropTable: { ...table, highlighted: column }
                });
          },
          // bust the cached highlighted index hint
          old => {
            const digState = digger;
            const [state, buryState] = digState(old);

            return state.highlightedIndexHint === -1
              ? old
              : buryState({ ...state, highlightedIndexHint: -1 });
          }
        )
      )
    );

    return;

    function tunnelListDigger(digFrom) {
      // digTo
      return from => {
        const [old, buryTo] = digFrom(from);
        const buryFrom = state => buryTo({ ...old, listAttrs: state });
        // the tunnel-digger pattern can be further generalized
        return [old.listAttrs, buryFrom];
      };
    }
  }

  function publisher(action, reducer) {
    const digger = old => [old, state => state];
    emitter(
      action,
      // export binder = (action, reducer, digger) =>
      produce(old => {
        const digState = digger;
        const [state, buryState] = digState(old);

        const last = state.listAttrs;
        const next = reducer(last, action);

        return next === last ? old : buryState({ ...state, listAttrs: next });
      })
    );
  }

  function publishValueChange(action, reducer) {
    const digger = old => [old, state => state];
    emitValueChange(
      action,
      // export bindValueChange = (action, reducer, digger) =>
      produce(old => {
        const digState = digger;
        const [state, buryState] = digState(old);

        const last = state.inputAttrs;
        const next = reducer(last, action);

        // cache the last value resulting from manual "typing"
        const manualValue = next && next.value;
        return next === last && manualValue === state.manualValue
          ? old
          : buryState({ ...state, manualValue, inputAttrs: next });
      })
    );
  }

  function handleKeyDown({ ...event }) {
    switch (event.key) {
      case "Enter": {
        emitItemAdd(
          // add an item the the list
          { event, type: "emitItemAdd", key: KEY },
          // export const reduceItemAdd =
          produce(state => {
            const text = state.inputAttrs && state.inputAttrs.value;

            const last = state.listAttrs ? state.listAttrs.items || [] : [];

            // only add unique (non-empty) items to the list
            if (!text || last.find(({ key }) => key === text)) {
              return state;
            }

            const next = [{ key: text, children: text, text }].concat(last);

            return {
              ...state,
              listAttrs: { ...state.listAttrs, items: next },
              inputAttrs: { ...state.inputAttrs, value: "" },
              manualValue: ""
            };
          })
        );
        return;
      }

      case "ArrowUp":
      case "ArrowDown": {
        const older = event.key === "ArrowUp";
        emitSiblingClone(
          // copy value from subsequent/younger or previous/older sibling item
          { older, event, type: "emitSiblingClone", key: KEY },
          // export const reduceSiblingClone =
          produce((state, action) => {
            const { items, itemPropTable } = state.listAttrs || {};
            const { highlightedIndexHint, manualValue } = state;

            if (!items || !items.length) {
              return state;
            }

            const highlightedKey = getFirstHighlightedKey(itemPropTable);

            const next = getSibling(
              !action.older,
              items,
              highlightedKey,
              highlightedIndexHint
            );

            const { index, item } = next;

            const text = index < 0 ? manualValue : item && item.text;

            return {
              ...state,
              highlightedIndexHint: index,
              inputAttrs: { ...state.inputAttrs, value: text },
              listAttrs: {
                ...state.listAttrs,
                itemPropTable: {
                  ...itemPropTable,
                  highlighted: asColumn(item ? [[item.key, item]] : [])
                }
              }
            };

            function getFirstHighlightedKey(table) {
              const column = asColumn(table && table.highlighted);
              const pairs = column ? [...column] : [];

              const [highlightedKey] = pairs.find(
                ([itemKey, highlighted]) => highlighted
              ) || [undefined];

              return highlightedKey;
            }

            function getSibling(younger, inList, ofKey, checkAt = -1) {
              const delta = younger ? 1 : -1;
              const matchingIndex = getIndex(inList, ofKey, checkAt);
              const lastIndex = matchingIndex < 0 ? checkAt : matchingIndex;
              const nextIndex =
                -2 + ((2 + delta + lastIndex) % (1 + inList.length));
              const clampIndex = nextIndex < -1 ? inList.length - 1 : nextIndex;

              return {
                index: clampIndex,
                item: clampIndex < 0 ? undefined : inList[clampIndex]
              };
            }

            function getIndex(inList, ofKey, checkAt) {
              if (ofKey === undefined) {
                return -1;
              } else if (
                checkAt > -1 &&
                checkAt < inList.length &&
                inList[checkAt] &&
                inList[checkAt].key === ofKey
              ) {
                return checkAt;
              } else {
                return inList.findIndex(({ key }) => key === ofKey);
              }
            }
          })
        );
        return;
      }
      default:
        break;
    }
  }
};
