import useInputHandle from "@kkoms/react-simple-input";
import "./App.css";

function App() {
  const { values, setValues, handlers, matching, checks, keys } =
    useInputHandle({
      // use strings, booleans, numbers to set type of input value. keys can be omitted.
      strings: ["email", "password"],
      booleans: ["checked"],
      numbers: ["age"],
      defaults: {
        // you should set default value if you want bind value to input element, as the initial object is empty.
        string: "",
        // boolean: false,
        // number: 0,
      },
    });

  // stringKeys - ["email", "password"]
  // boolKeys - ["checked"]
  // numberKeys - ["age"]
  const { stringKeys, boolKeys, numberKeys } = keys;

  // making your own custom handler
  const customHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === matching.email) {
      console.log("email changed");

      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });

      return;
    }

    if (checks.isStrKey(e.target.name)) {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  console.log(values.email);
  console.log(values.password);
  console.log(values.checked);
  console.log(values.age);

  return (
    <div style={{ backgroundColor: "red" }}>
      <input
        id={matching.password}
        onChange={handlers.handleString(true)}
        value={values.password}
      />
      <input
        name={matching.password}
        onChange={handlers.handleString()}
        value={values.password}
      />
      <input
        name={matching.email}
        onChange={handlers.handleString()}
        value={values.email}
      />
      <input
        type="checkbox"
        name={matching.checked}
        onChange={handlers.handleCheck()}
      />
      <input
        type="number"
        name={matching.age}
        onChange={handlers.handleNumber()}
      />
    </div>
  );
}

export default App;
