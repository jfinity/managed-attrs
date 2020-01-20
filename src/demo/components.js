import produce from "immer";
import React from "react";
import { sequence, useManagedAttrs } from "../lib/react";

export const ValueInput = props => {
  const { KEY, value = "", nodeProps } = props;
  const { emitChange } = props;

  // useCallback(adaptChange(KEY, { emitChange }), [KEY, emitChange]);
  const handleChange = ({ ...event }) => {
    const { value } = event.target;

    emitChange(
      // interrogable action record describing the event
      { value, event, type: "emitChange", key: KEY },
      // opaque means to realize the *anticipated* changes to "stateful" props
      produce((state, action) => {
        // return { ...state, value: action.value };
        state.value = action.value; // immerjs
        return state;
      })
    );
  };

  return <input value={value} onChange={handleChange} {...nodeProps} />;
};

export const LineItem = props => {
  const { KEY, selected, highlighted, style, children, nodeProps } = props;
  const {
    emitter, // should be sufficient to satisfy any callback emitted event

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
      // export const reduceSelectionChange = // closure-free testable unit
      produce((state, action) => {
        const { ctrlKey } = action.event; // anti-selection (multi-selection)
        state.selected = ctrlKey ? !state.selected || undefined : true;
        // undefined is "false" enough
        return state;
      })
    );
  }

  // useCallback(adaptMouseEnter(KEY, { emitHoverChange }));
  function handleMouseEnter({ ...event }) {
    emitHoverChange(
      { hovering: true, event, type: "emitHoverChange", key: KEY },
      // export const reduceHoverChange = // closure-free testable unit
      produce((state, { hovering }) => {
        state.highlighted = hovering || undefined;
        // undefined is "false" enough
        return state;
      })
    );
  }

  // useCallback(adaptMouseLeave(KEY, { emitHoverChange }));
  function handleMouseLeave({ ...event }) {
    emitHoverChange(
      { hovering: false, event, type: "emitHoverChange", key: KEY },
      // duplicated code
      produce((state, { hovering }) => {
        state.highlighted = hovering || undefined;
        // undefined is "false" enough
        return state;
      })
    );
  }
};

const readRow = (table, key, columns = Object.keys(table || {})) => {
  const props = {};

  for (let index = 0; index < columns.length; index += 1) {
    const field = columns[index];

    if (field !== "key") {
      props[field] = table[field] ? table[field].get(key) : undefined;
    }
  }

  return props;
};
const writeRow = (table, key, props, columns = Object.keys(props)) => {
  const result = table || {};

  for (let index = 0; index < columns.length; index += 1) {
    const field = columns[index];

    result[field] = result[field] || new Map();

    if (props[field] !== undefined) {
      result[field].set(key, props[field]);
    } else if (result[field]) {
      result[field].delete(key);
    }
  }

  return result;
};
// TODO: investigate why I cannot produce writeRow

export const ItemList = props => {
  const { KEY, items, itemPropTable, itemBaseProps, nodeProps } = props;
  const { emitter, emitSelectionChange = emitter } = props;

  const columns = Object.keys(itemPropTable || {});

  return (
    <div {...nodeProps}>
      {items.map(itemListProps => {
        const { key } = itemListProps;
        const itemRowProps = readRow(itemPropTable, key, columns);

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
    const leaf = state => state;
    emitter(
      // substitute enriched action
      { ...action, itemKey: action.key, key: KEY },
      // export const bindTableRow = (action, reducer, leaf) =>
      produce((trunk, { itemKey }) => {
        const state = leaf(trunk);
        const prior = readRow(state.itemPropTable, itemKey);
        const next = reducer(prior, action);
        state.itemPropTable = writeRow(state.itemPropTable, itemKey, next);
        return trunk;
      })
    );
  }

  // useCallback(wrapSelectionChange(KEY, { emitSelectionChange }));
  function publishSelectionChange(action, reducer) {
    const leaf = state => state;
    emitSelectionChange(
      // substitute enriched action
      { ...action, itemKey: action.key, key: KEY },
      // export const bindSelectionChange = (action, reducer, leaf) =>
      produce(
        sequence(
          // bindTableRow(action, reducer, leaf) // duplication opportunity
          (trunk, { itemKey }) => {
            const state = leaf(trunk);
            const prior = readRow(state.itemPropTable, itemKey);
            const next = reducer(prior, action);
            state.itemPropTable = writeRow(state.itemPropTable, itemKey, next);
            return trunk;
          },
          // conditionally limit to a single selection
          (trunk, { itemKey, event }) => {
            const state = leaf(trunk);

            if (!event.ctrlKey) {
              const value = state.itemPropTable.selected.get(itemKey);

              state.itemPropTable.selected.clear();

              if (value) {
                state.itemPropTable.selected.set(itemKey, value);
              }
            }

            return trunk;
          }
        )
      )
    );
  }
};

export const EntryList = props => {
  const { KEY, inputProps, listProps, nodeProps } = props;
  const { value } = inputProps;
  const { items, itemPropTable, itemBaseProps } = listProps;

  const {
    emitter,

    emitSiblingClone = emitter,
    emitValueChange = emitter,
    emitItemAdd = emitter,

    emitHoverChange = emitter
  } = props;

  return (
    <div {...nodeProps}>
      <ValueInput
        value={value}
        emitChange={publishValueChange}
        KEY={KEY}
        nodeProps={{ onKeyDown: handleKeyDown, ...inputProps.nodeProps }}
      />
      <ItemList
        items={items}
        itemPropTable={itemPropTable}
        itemBaseProps={{
          emitHoverChange: publishHoverChange,
          ...itemBaseProps
        }}
        emitter={publisher}
        KEY={KEY}
        {...listProps.nodeProps}
      />
    </div>
  );

  function publishHoverChange(action, reducer) {
    const leaf = state => state.listProps;
    emitHoverChange(
      { ...action, itemKey: action.key, key: KEY },
      // export const bindHoverChange = (action, reducer, leaf) =>
      produce(
        sequence(
          // bindTableRow(action, reducer, leaf),
          (trunk, { itemKey }) => {
            const state = leaf(trunk);
            const prior = readRow(state.itemPropTable, itemKey);
            const next = reducer(prior, action);
            state.itemPropTable = writeRow(state.itemPropTable, itemKey, next);
            return trunk;
          },
          // enforce a single highlight
          (trunk, { itemKey }) => {
            const state = leaf(trunk);
            const value = state.itemPropTable.highlighted.get(itemKey);

            state.itemPropTable.highlighted.clear();

            if (value) {
              state.itemPropTable.highlighted.set(itemKey, value);
            }

            return trunk;
          }
          // bust the cached highlighted index hint
          // state => void (state.highlightedIndexHint = -1)
        )
      )
    );
  }

  function publisher(action, reducer) {
    const leaf = state => state;
    emitter(
      action,
      // export binder = (action, reducer, leaf) =>
      produce(trunk => {
        const state = leaf(trunk);
        state.listProps = reducer(state.listProps, action);
        return trunk;
      })
    );
  }

  function publishValueChange(action, reducer) {
    const leaf = state => state;
    emitValueChange(
      action,
      // export bindValueChange = (action, reducer, leaf) =>
      produce(trunk => {
        const state = leaf(trunk);
        state.inputProps = reducer(state.inputProps, action);
        // cache the last value resulting from manual "typing"
        state.manualValue = state.inputProps.value;
        return trunk;
      })
    );
  }

  function handleKeyDown({ ...event }) {
    switch (event.key) {
      case "Enter": {
        emitItemAdd(
          { event, type: "emitItemAdd", key: KEY },
          produce(state => {
            const { value: text } = state.inputProps;
            const { items: rows } = state.listProps;

            // only add unique (non-empty) items to the list
            if (!text || rows.find(({ key }) => key === text)) {
              return state;
            }

            state.listProps.items = [
              { key: text, children: text, text }
            ].concat(rows);
            state.inputProps.value = "";
            state.manualValue = "";
            return state;
          })
        );
        return;
      }

      case "ArrowUp":
      case "ArrowDown": {
        const older = event.key === "ArrowUp";
        emitSiblingClone(
          { event, older, type: "emitSiblingClone", key: KEY },
          // copy value from subsequent/younger or previous/older sibling item
          produce((state, action) => {
            if (!state.listProps.items || !state.listProps.items.length) {
              return state;
            }

            const highlightedKey = getFirstHighlightedKey(
              state.listProps.itemPropTable
            );

            const next = getSibling(
              !action.older,
              state.listProps.items,
              highlightedKey,
              state.highlightedIndexHint
            );

            const { index, item } = next;

            state.highlightedIndexHint = index;

            state.inputProps.value =
              index < 0 ? state.manualValue : item && item.text;

            if (!state.listProps.itemPropTable) {
              state.listProps.itemPropTable = {};
            }

            if (!state.listProps.itemPropTable.highlighted) {
              state.listProps.itemPropTable.highlighted = new Map();
            } else {
              state.listProps.itemPropTable.highlighted.clear();
            }

            if (item) {
              state.listProps.itemPropTable.highlighted.set(item.key, item);
            }

            return state;

            function getFirstHighlightedKey(table) {
              const entries =
                table && table.highlighted ? [...table.highlighted] : [];

              const [highlightedKey] = entries.find(
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
