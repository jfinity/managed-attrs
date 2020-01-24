export default json`
{
  "digest": {
    "all": "./${foldername}/${basename}.json",
    "byPrefix": "./${prefix}/../${basename}.json"
  }
}
`;

export default `./${foldername}/01-component/a-${basename}/01-${count}-${filename}`;

export const ValueInput = () => {
  return (
    <></> // render some JSX
  );
};

export default null;
export default `./${foldername}/02-render/a-${basename}/02-${count}-${filename}`;

export const ValueInput = () => {
  return (
    <input>
    </input>
  );
};

export default null;
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

export const ValueInput = props => {
  return (
    <input>
    </input>
  );
};

export default null;
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

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
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    // retrieve non-callback props;
  } = props;

  return (
    <input>
    </input>
  );
};

export default null;
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  return (
    <input>
    </input>
  );
};

export default null;
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  return (
    <input
      // pass props to children
    >
    </input>
  );
};

export default null;
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  return (
    <input
      value={value}
    >
    </input>
  );
};

export default null;
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  return (
    <input
      // pass props to children
      value={value}
    >
    </input>
  );
};

export default null;
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

export const ValueInput = props => {
  const {
    value = ""
  } = props;

  const {
    // retrieve callback props;
  } = props;

  return (
    <input
      value={value}
    >
    </input>
  );
};

export default null;
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

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
    >
    </input>
  );
};

export default null;
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

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
export default `./${foldername}/03-props/a-${basename}/03-${count}-${filename}`;

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
export default `./${foldername}/04-consumer/a-${basename}/04-${count}-${filename}`;

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
export default `./${foldername}/04-consumer/a-${basename}/04-${count}-${filename}`;

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
