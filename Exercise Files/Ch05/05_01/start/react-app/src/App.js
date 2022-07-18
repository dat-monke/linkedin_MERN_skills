import "./App.css";
import { useReducer, useState, useRef } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  return [
    {value, onChange: e => setValue(e.target.value)}
  ], () => setValue(initialValue)
}

function App() {
  const txtTitle = useRef()
  const hexColor = useRef()

  // Take down the current value and create an alert box
  const submit = e => {
    e.preventDefault()
    // const title = txtTitle.current.value
    // const color = hexColor.current.value
    alert(`${title}, ${color}`)
    txtTitle.current.value=""
    hexColor.current.value=""
  }

  const [checked, setChecked] = useReducer(
    (checked) => !checked,
    false
  );
  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..."/>
    </form>
    // <div className="App">
    //   <input
    //     type="checkbox"
    //     value={checked}
    //     onChange={setChecked}
    //   />
    //   <label>
    //     {checked ? "checked" : "not checked"}
    //   </label>
    // </div>
  );
}

export default App;
