import "./App.css";
import { useReducer, useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  return [
    {value, onChange: e => setValue(e.target.value)}
  ], () => setValue(initialValue)
}

function App() {
  const [checked, setChecked] = useReducer(
    (checked) => !checked,
    false
  );
  return (
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>
        {checked ? "checked" : "not checked"}
      </label>
    </div>
  );
}

export default App;
