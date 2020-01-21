import produce from "immer";
import React from "react";
import { useManagedAttrs, sequence } from "../lib/react";
import { ValueInput, EntryList } from "./components";

const Example1 = () => {
  const [attrs, manageState] = useManagedAttrs({ value: "optional" });

  return <ValueInput {...attrs} emitChange={manageState} />;
};

const Example2 = () => {
  const [attrs, manageState] = useManagedAttrs({ value: "..." });

  return (
    <div>
      <button onClick={() => manageState(null, { value: "" })}>Clear</button>
      <ValueInput {...attrs} emitChange={manageState} />
      <span>{attrs.value}</span>
    </div>
  );
};

const Example3 = () => {
  const [attrs, manageState] = useManagedAttrs({
    top: { value: "TOP" },
    bottom: { value: "bottom" }
  });

  return (
    <div>
      <ValueInput KEY="top" {...attrs.top} emitChange={publishChange} />
      <br />
      <br />
      <ValueInput KEY="bottom" {...attrs.bottom} emitChange={publishChange} />
    </div>
  );

  function publishChange(action, reducer) {
    manageState(
      action,
      // export const bindChange = (action, reducer) => // testable factory
      produce(
        sequence(
          state => {
            switch (action.key) {
              default:
                break;
              case "top":
              case "bottom":
                state[action.key] = reducer(state[action.key], action);
            }
            return state;
          },
          state => {
            if (action.key === "top") {
              state.bottom.value = state.top.value.toUpperCase();
            } else if (action.key === "bottom") {
              state.top.value = state.bottom.value.toLowerCase();
            }
            return state;
          }
        )
      )
    );
  }
};

const App = () => {
  const [attrs, manageState] = useManagedAttrs({
    inputProps: {},
    listProps: {
      items: [
        { key: "won", text: "won", children: "won" },
        { key: "too", text: "too", children: "too" },
        { key: "for", text: "for", children: "for" },
        { key: "ate", text: "ate", children: "ate" }
      ].sort(collate)
    }
  });

  return (
    <div>
      <h1>Example 1</h1>
      <Example1 />

      <h1>Example 2</h1>
      <Example2 />

      <h1>Example 3</h1>
      <Example3 />

      <h1>Example 4</h1>
      <button onClick={handleClick}>Remove Selected Items</button>
      <br />
      <br />
      <EntryList
        {...attrs}
        emitItemAdd={publishItemAdd}
        emitter={manageState}
        inputProps={{
          ...attrs.inputProps,
          nodeProps: {
            placeholder: "Enter new list item...",
            style: { width: "100%" }
          }
        }}
        nodeProps={{
          style: { border: "1px solid black" }
        }}
      />
    </div>
  );

  function collate({ text: left }, { text: right }) {
    return left.toLowerCase().localeCompare(right.toLowerCase());
  }

  function publishItemAdd(action, reducer) {
    manageState(
      action,
      produce(
        sequence(reducer, state => {
          state.listProps.items = state.listProps.items.slice().sort(collate);
          return state;
        })
      )
    );
  }

  function handleClick({ ...event }) {
    manageState(
      { event, type: "emitFilterClick", key: undefined },
      produce(state => {
        const { items, itemPropTable = {} } = state.listProps;
        const { selected } = itemPropTable;
        const columns = Object.keys(itemPropTable);

        state.listProps.items = items.slice().filter(({ key }) => {
          if (!selected || !selected.get(key)) {
            return true;
          }

          for (let at = 0; at < columns.length; at += 1) {
            if (itemPropTable[columns[at]]) {
              itemPropTable[columns[at]].delete(key);
            }
          }

          return false;
        });

        return state;
      })
    );
  }
};

export default App;
