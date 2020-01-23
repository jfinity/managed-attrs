export default `../codegen/003-parallels/01-component/01-${count}-${filename}`;

export const ValueInput = () => {
  // render some JSX
  return (
    <>
    </>
  );
};

export default null;
export default `../codegen/003-parallels/02-render/02-${count}-${filename}`;

export const ValueInput = () => {
  // render some JSX
  return (
    <input>
    </input>
  );
};

export default null;
export default `../codegen/003-parallels/03-props/03-${count}-${filename}`;

export const ValueInput = props => {
  // render some JSX
  return (
    <input>
    </input>
  );
};

export default null;
export default `../codegen/003-parallels/03-props/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    // retrieve non-callback props;
  } = props;

  const {
    // retrieve callback props;
  } = props;

  return (
    <input>
    </input>
  );
};

export default null;
export default `../codegen/003-parallels/03-props/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onChange = event => {}
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};

export default null;
export default `../codegen/003-parallels/03-props/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onChange = event => {}
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};

export const App = () => {
  const [value, setValue] = useState("default text");

  return (
    <ValueInput
      value={value}
      onChange={
        event => setValue(event.target.value)
      }
    >
    </ValueInput>
  );
};

export default null;
export default `../codegen/003-parallels/03-props/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    onChange = event => {}
  } = props;

  return (
    <input
      value={value}

      onChange={
        onChange
      }
    >
    </input>
  );
};

export const App = () => {
  const [value, setValue] = useState("default text");

  return (
    <ValueInput
      value={value}
      onChange={
        event => setValue(event.target.value)
      }
    >
    </ValueInput>
  );
};

// code duplication burden
export const Lib = () => {
  const [value, setValue] = useState("placeholder");

  return (
    <ValueInput
      value={value}
      onChange={
        event => setValue(event.target.value)
      }
    >
    </ValueInput>
  );
};

export default null;
