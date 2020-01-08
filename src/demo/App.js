import React from "react";
import { bindLib, sequence, getManager, scopeManager } from "../lib";

const { useManagedAttrs } = bindLib(React);

const App = () => {
  const [attrs, manageState] = useManagedAttrs(
    {},
    {
      items: [
        { key: "won", text: "won", children: "won" },
        { key: "too", text: "too", children: "too" },
        { key: "for", text: "for", children: "for" },
        { key: "ate", text: "ate", children: "ate" }
      ]
    }
  );
  return (
    <div>
      <EntryList
        {...useEntryList(attrs, manageState)}
        {...attrs}
        inputProps={{
          placeholder: "Enter new list item..."
        }}
      />
    </div>
  );
};

export default App;

// get relevant state managers by name -- reserve hook usage rights
const useValueInput = (attrs, manageState) => {
  const manager = getManager(attrs, manageState);
  const { runChange = manager } =
    typeof attrs === "function" ? attrs(manageState) || {} : attrs || {};
  return { manager, runChange };
}; // return { manager, runChange };
const ValueInput = props => {
  const [attrs, manageState] = useManagedAttrs(props, { value: "" });

  const { KEY, value, nodeProps } = attrs;

  const controller = useValueInput(attrs, manageState);

  const handleChange = adaptChange(KEY, controller); // useCallback(...);

  // distinguishing run[Change] from on[Change] helps clarify callback signature
  return <input value={value} onChange={handleChange} {...nodeProps} />;

  // export-ready test-friendly function declarations

  function adaptChange(key, { runChange }) {
    // adapter to normalize callback signature (and state management protocol)
    return ({ ...event }) => {
      const { value } = event.target;
      // let details; // pluggable leak in abstraction -- uses a closure

      runChange &&
        runChange(
          // details =
          [{ event, value, type: "runChange", spec: "onChange", key }],
          produceValueChange // && (state => produceValueChange(state, details))
        );

      // unmanaged callbacks return undefined (just a convention)
    };
  }
  function produceValueChange(lastState, [payload]) {
    const { value } = payload; // "easy" redux-reducer-inspired call signature
    return { ...lastState, value }; // npm install immer
  }

  const DevValueInput = props => {
    const [attrs, manageState] = useManagedAttrs(props, { value: "" });

    const { KEY: key, value, nodeProps } = attrs; // KEY aliased

    const { runChange = manageState } = attrs; // prefer extracted hook...

    return <input value={value} onChange={handleChange} {...nodeProps} />;

    function handleChange({ ...event }) {
      const { value } = event;

      runChange &&
        runChange(
          [{ event, value, type: "runChange", spec: "onChange", key }],
          function produceValueChange(lastState, [payload]) {
            const { value } = payload;
            return { ...lastState, value };
          }
        );
    }

    const DevWidget = properties => {
      const [state, setState] = useManagedAttrs(properties, { value: "..." });
      return (
        <div>
          <DevValueInput
            {...useValueInput(state, setState)} // ...which makes control "easy"
            {...state}
          >
            controllable
          </DevValueInput>
          <span>{state.value}</span>
          <button onClick={() => void setState({ value: "" })}></button>
        </div>
      );
    };

    const DevSyncView = properties => {
      const [{ top, bottom }, manageView] = useManagedAttrs(properties, {
        top: {},
        bottom: {}
      });

      return (
        <div>
          <DevValueInput {...top} runChange={executeTopChange} />
          <DevValueInput
            {...bottom}
            {...useValueInput(
              {
                runChange: executeBottomChange
              },
              scopeManager("bottom", manageView)
            )}
          />
        </div>
      );

      // bottom.value = top.value.toUpperCase();
      function executeTopChange(details, producer) {
        manageView(details, state => {
          const next = producer(state.top, details);

          return {
            ...state,
            top: next,
            bottom: {
              ...state.bottom, // yarn add immer
              value: next.value.toUpperCase()
            }
          };
        });
      }

      // top.value = bottom.value.toLowerCase();
      function executeBottomChange(details, producer) {
        manageView(details, state => {
          const next = producer(state.bottom, details);

          return {
            ...state,
            bottom: next,
            top: {
              ...state.top, // yarn add immer
              value: next.value.toLowerCase()
            }
          };
        });
      }
    };
  };
};

const useLineItem = (attrs, manageState) => {
  const manager = getManager(attrs, manageState);
  // manager (manageState) can satisfy any and all of the callbacks equally well
  const {
    runSelectionChange = manager,
    runClick = manager,

    runHoverChange = manager,
    runMouseEnter = manager,
    runMouseLeave = manager
  } = typeof attrs === "function" ? attrs(manageState) || {} : attrs || {};

  return {
    manager,
    runSelectionChange,
    runClick,

    runHoverChange,
    runMouseEnter,
    runMouseLeave
  };
}; // {manager, runSelectionChange/Click, runHoverChange/MouseEnter/MouseLeave}
const LineItem = props => {
  const [attrs, manageState] = useManagedAttrs(props, {
    selected: false,
    highlighted: false
  });

  const { KEY, selected, highlighted, children, style, nodeProps } = attrs;

  const controller = useLineItem(attrs, manageState);

  const handleClick = adaptClick(KEY, controller);
  const handleMouseEnter = adaptMouseEnter(KEY, controller);
  const handleMouseLeave = adaptMouseLeave(KEY, controller);

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

  function adaptClick(key, { runSelectionChange, runClick }) {
    return ({ ...event }) => {
      const spec = "onClick";
      const ok = // run managers in most-specific-to-least order until one "oks"
        runSelectionChange &&
        runSelectionChange(
          [{ event, type: "runSelectionChange", spec, key }],
          produceSelectionChange
        );

      !ok && runClick && runClick([{ event, type: "runClick", spec, key }]);
    };
  }
  function produceSelectionChange(lastState, [payload]) {
    const { ctrlKey } = payload.event; // anti-selection (and multi-selection)
    return { ...lastState, selected: ctrlKey ? !lastState.selected : true };
  }

  function adaptMouseEnter(key, { runHoverChange, runMouseEnter }) {
    return ({ ...event }) => {
      const spec = "onMouseEnter";
      const ok =
        runHoverChange &&
        runHoverChange(
          [{ event, hovering: true, type: "runHoverChange", spec, key }],
          produceHoverChange
        );

      !ok &&
        runMouseEnter &&
        runMouseEnter([{ event, type: "runMouseEnter", spec, key }]);
    };
  }
  function adaptMouseLeave(key, { runHoverChange, runMouseLeave }) {
    return ({ ...event }) => {
      const spec = "onMouseLeave";
      const ok =
        runHoverChange &&
        runHoverChange(
          [{ event, hovering: false, type: "runHoverChange", spec, key }],
          produceHoverChange
        );

      !ok &&
        runMouseLeave &&
        runMouseLeave([{ event, type: "runMouseLeave", spec, key }]);
    };
  }
  function produceHoverChange(lastState, [payload]) {
    const highlighted = payload.hovering;
    return { ...lastState, highlighted };
  }
};

const useItemList = (attrs, manageState) => {
  const manager = getManager(attrs, manageState);
  const { runSelectionChange = manager } =
    typeof attrs === "function" ? attrs(manageState) || {} : attrs || {};
  return { manager, runSelectionChange };
}; // return { manager, runSelectionChange };
const ItemList = props => {
  const [attrs, manageState] = useManagedAttrs(props, () => ({
    itemMatrix: { selected: new Map().set("itemKey", false) } && {} // managed
  }));

  const {
    KEY,
    items = [{ key: "itemKey", children: "label" }] && [], // unmanaged
    itemMatrix, // judge pros & cons of management and data models independently
    itemCommonProps,
    nodeProps
  } = attrs;

  const controller = useItemList(attrs, manageState);

  const executeSelectionChange = wrapSelectionChange(KEY, controller);

  const fields = Object.keys({ selected: null, ...itemMatrix });

  return (
    <div {...nodeProps}>
      {items.map(unmanagedProps => {
        const { key } = unmanagedProps;
        const managedProps = vectorProps(key, itemMatrix, fields);

        // const { selected } = managedProps;
        return (
          <LineItem
            {...itemCommonProps}
            {...unmanagedProps}
            {...managedProps}
            runSelectionChange={executeSelectionChange}
            KEY={key}
            key={key}
          />
        );
      })}
    </div>
  );

  function wrapSelectionChange(key, { runSelectionChange }) {
    return (details, producer) => {
      const [subPayload] = details;
      return (
        runSelectionChange && // managed callbacks return truthy when "executed"
        runSelectionChange(
          // update payload and embed original details/producer
          [{ ...subPayload, itemKey: subPayload.key, key }, details, producer],
          produceSelectionChange
        )
      );
    };
  }
  function produceSelectionChange(
    lastState,
    [payload, subDetails, subProducer]
  ) {
    const [{ key }] = subDetails;
    const subState = subProducer(
      vectorProps(key, { selected: null, ...lastState.itemMatrix }),
      subDetails // leak in abstraction -- more flexible than a closure(?)
    );

    const { ctrlKey } = payload.event;
    const selected = new Map(ctrlKey ? lastState.itemMatrix.selected : null);
    if (subState.selected) {
      selected.set(key, subState.selected);
    } else {
      selected.delete(key);
    }

    return {
      ...lastState,
      itemMatrix: {
        ...lastState.itemMatrix,
        selected
      }
    };
  }
};

function vectorProps(key, matrix, names = Object.keys(matrix)) {
  const result = {};
  for (let at = 0; at < names.length; at += 1) {
    const values = matrix[names[at]];
    result[names[at]] = values ? values.get(key) : undefined;
  }
  return result;
}

const useEntryList = (attrs, manageState) => {
  const manager = getManager(attrs, manageState);
  const {
    runHoverChange = manager,

    runChange = manager,

    runItemAdd = manager,
    runSiblingClone = manager,
    runKeyDown = manager
  } = typeof attrs === "function" ? attrs(manageState) || {} : attrs || {};

  return {
    manager,
    runHoverChange,
    runChange,
    runItemAdd,
    runKeyDown,
    runSiblingClone
  };
}; // { manager, runHoverChange, runChange, runItemAdd/SiblingClone/KeyDown }
const EntryList = props => {
  const [attrs, manageState] = useManagedAttrs(props, {
    items: [],
    itemMatrix: { highlighted: new Map().set("itemKey", false) } && {},
    value: "",
    manualValue: ""
  });

  const {
    KEY,
    items,
    itemMatrix,
    value,
    listProps,
    inputProps,
    nodeProps
  } = attrs;

  const controller = useEntryList(attrs, manageState);

  const executeHoverChange = wrapHoverChange(KEY, controller);
  const executeChange = wrapChange(KEY, controller);
  const handleKeyDown = adaptKeyDown(KEY, controller);

  return (
    <div {...nodeProps}>
      <ValueInput
        {...useValueInput(attrs, manageState)}
        value={value}
        runChange={executeChange}
        KEY={KEY}
        nodeProps={{ onKeyDown: handleKeyDown, ...inputProps }}
      />
      <ItemList
        {...useItemList(attrs, manageState)}
        items={items}
        itemMatrix={
          itemMatrix && "highlighted" in itemMatrix
            ? itemMatrix
            : { highlighted: null, ...itemMatrix }
        }
        itemCommonProps={{
          runHoverChange: executeHoverChange
        }}
        KEY={KEY}
        {...listProps}
      />
    </div>
  );

  function getHighlightedKey(matrix) {
    const entries = matrix && matrix.highlighted ? [...matrix.highlighted] : [];
    const [highlightedKey] = entries.find(
      ([itemKey, highlighted]) => highlighted
    ) || [undefined];
    return highlightedKey;
  }

  function wrapHoverChange(key, { runHoverChange }) {
    return (details, producer) => {
      const [subPayload] = details;
      return (
        runHoverChange &&
        runHoverChange(
          [{ ...subPayload, itemKey: subPayload.key, key }, details, producer],
          sequence(produceHoverChange, transformHighlighting)
        )
      );
    };
  }
  function produceHoverChange(lastState, [payload, subDetails, subProducer]) {
    const [{ key }] = subDetails;
    const subState = subProducer(
      vectorProps(key, { highlighted: null, ...lastState.itemMatrix }),
      subDetails // leak in abstraction -- more flexible than a closure(?)
    );

    const { ctrlKey } = payload.event;
    const highlighted = new Map(
      ctrlKey ? lastState.itemMatrix.highlighted : null
    );
    if (subState.highlighted) {
      highlighted.set(key, subState.highlighted);
    } else {
      highlighted.delete(key);
    }

    return {
      ...lastState,
      itemMatrix: {
        ...lastState.itemMatrix,
        highlighted
      }
    };
  }
  function transformHighlighting(lastState) {
    // guarantee a single key is highlighted and "bust" cached hint
    const highlightedKey = getHighlightedKey(lastState.itemMatrix);
    return {
      ...lastState,
      highlightedIndexHint: -1,
      itemMatrix: {
        ...lastState.itemMatrix,
        highlighted: highlightedKey ? new Map().set(highlightedKey, true) : null
      }
    };
  }

  function wrapChange(key, { runChange }) {
    return (details, producer) => {
      return (
        runChange && runChange(details, sequence(producer, transformCache))
      ); // state => transformCache(producer(state, details), details)
    };
  }
  function transformCache(lastState) {
    // cache the last value resulting from manual "typing"
    return {
      ...lastState,
      manualValue: lastState.value
    };
  }

  function adaptKeyDown(key, { runItemAdd, runSiblingClone, runKeyDown }) {
    return ({ ...event }) => {
      const spec = "onKeyDown";
      let ok;

      switch (event.key) {
        case "Enter": {
          ok =
            runItemAdd &&
            runItemAdd(
              [{ event, type: "runItemAdd", spec, key }],
              produceItemAdd
            );
          break;
        }

        case "ArrowUp":
        case "ArrowDown": {
          const older = event.key === "ArrowUp";
          ok =
            runSiblingClone &&
            runSiblingClone(
              [{ event, older, type: "runSiblingClone", spec, key }],
              produceSiblingClone
            );
          break;
        }
      }

      !ok &&
        runKeyDown &&
        runKeyDown([{ event, type: "runKeyDown", spec, key }]);
    };
  }
  function produceItemAdd(lastState) {
    const text = lastState.value;

    // only add unique (non-empty) items to the list
    if (!text || lastState.items.find(({ key }) => key === text)) {
      return lastState;
    }

    return {
      ...lastState,
      items: [{ key: text, children: text, text }].concat(lastState.items),
      value: "", // clear the input
      manualValue: ""
    };
  }
  function produceSiblingClone(lastState, [payload]) {
    // copy value from subsequent ("younger") or previous ("older") sibling item
    const { older } = payload;

    if (!lastState.items || !lastState.items.length) {
      return lastState;
    }

    const highlightedKey = getHighlightedKey(lastState.itemMatrix);

    const next = getSibling(
      !older,
      lastState.items,
      highlightedKey,
      lastState.highlightedIndexHint
    );

    return {
      ...lastState,
      highlightedIndexHint: next.index,
      itemMatrix: {
        ...lastState.itemMatrix,
        highlighted: next.item ? new Map().set(next.item.key, true) : null
      },
      value:
        next.index < 0 ? lastState.manualValue : next.item && next.item.text
    };

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

    function getSibling(younger, inList, ofKey, checkAt = -1) {
      const delta = younger ? 1 : -1;
      const matchingIndex = getIndex(inList, ofKey, checkAt);
      const lastIndex = matchingIndex < 0 ? checkAt : matchingIndex;
      const nextIndex = -2 + ((2 + delta + lastIndex) % (1 + inList.length));
      const clampIndex = nextIndex < -1 ? inList.length - 1 : nextIndex;

      return {
        index: clampIndex,
        item: clampIndex < 0 ? undefined : inList[clampIndex]
      };
    }
  }
};
