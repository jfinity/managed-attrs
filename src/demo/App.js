import React from "react";
import { useManagedAttrs, sequence } from "../lib/react";
import { ValueInput, EntryList } from "./components";

const produce = fn => fn;

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
    top: { value: "text" },
    bottom: { value: "txet" }
  });

  return (
    <div>
      <ValueInput KEY="top" {...attrs.top} emitChange={publishChange} />
      <ValueInput
        KEY="bottom"
        {...attrs.bottom}
        emitChange={publishChange}
        nodeProps={{
          style: { textAlign: "right" }
        }}
      />
    </div>
  );

  function publishChange(action, reducer) {
    manageState(
      action,
      // export const bindChange = (action, reducer) => // test me
      produce(
        sequence(
          state => {
            const { key } = action;
            switch (key) {
              case "top":
              case "bottom":
                return { ...state, [key]: reducer(state[key], action) };
              default:
                return state;
            }
          },
          state => {
            const value = [...state.top.value].reverse().join("");

            return action.key === "top" && state.bottom.value !== value
              ? { ...state, bottom: { ...state.bottom, value } }
              : state;
          },
          state => {
            const value = [...state.bottom.value].reverse().join("");

            return action.key === "bottom" && state.top.value !== value
              ? { ...state, top: { ...state.top, value } }
              : state;
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
      // export const bindItemAdd = (action, reducer) => // test me
      produce(
        sequence(reducer, state => {
          const items = state.listProps.items.slice().sort(collate);
          return { ...state, listProps: { ...state.listProps, items } };
        })
      )
    );
  }

  function handleClick({ ...event }) {
    manageState(
      { event, type: "emitFilterClick", key: undefined },
      // export const reduceClick = // test me
      produce(state => {
        const { listProps } = state;
        const { selected } = listProps.itemPropTable;
        const fields = Object.keys(listProps.itemPropTable);
        const match = listProps.itemPropTable;
        let table = listProps.itemPropTable;

        const items = listProps.items.filter(({ key }) => {
          if (!selected || !selected.get(key)) {
            return true;
          }

          for (let at = 0; at < fields.length; at += 1) {
            const name = fields[at];
            let columns = table[name];

            if (table[name]) {
              const update = columns === match[name] && columns.has(key);
              columns = update ? new Map(columns) : columns;
              columns.delete(key);

              table = columns === table[name] ? table : { ...table };
              table[name] = columns;
            }
          }

          return false;
        });

        const itemPropTable = table;
        return table === listProps.itemPropTable
          ? state
          : { ...state, listProps: { ...listProps, items, itemPropTable } };
      })
    );
  }
};

export default App;
