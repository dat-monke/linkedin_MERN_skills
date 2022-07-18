import './App.css';
// Use effect is best for images/effects LOL
import { useState } from 'react'; 


function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  return [
    {
      value, onChange: e => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ]
}

function App({library}) {
  // This is known as array destructuring, you can declare the state, then something else to modify the state
  // const [emotion, setEmotion] = useState("happy"); 
  // const [secondary, setSecondary] = useState("tired")

  // // This is a dependency array
  // // Using the [] you can tell it when to go off, you can leave it blank if you want it to only trigger once
  // useEffect(() => {
  //   console.log(`It's ${emotion} right now`)
  // }, [emotion,secondary])

  const [title, setTitle] = useState("")
  const [color, setColor] = useState("#000000")

  const submit = (e) => {
    e.preventDefault()
    alert(`${title}, ${color}`)
    setTitle("")
    setColor("#000000")
  }

  return (
    // In here you can declare the variable that is defined in 
    // index.js and get the variable from there and use it in the HTML
    <form onSubmit={submit}> 
      <input
        value={title}
        onChange={event => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."/>
      <input value={color} type="color" onChange={event => setColor(event.target.value)}/>
      <button>ADD</button> 
    </form>
  );
}

export default App;


/* 

How to create props, state, and dependency arrays: 

  import { useState, useEffect } from 'react'; 

  useEffect(() => {
      console.log(`It's ${secondary} around here!`)
    }, [secondary])

  <h1>Current emotion is {emotion}</h1>
  <button onClick={() => setEmotion("sad")}>Sad</button>
  <button onClick={() => setEmotion("excited for deez nuts")}>Excited</button>
  <h2>Current secondary emotion is {secondary} </h2>
  <button onClick={() => setSecondary("grateful")}>Grateful</button>



Example of a destructured array: 

  const [firstElement, secondElement] = ["thing1", "thing2"] << firstElement is mapped to "thing1"

  console.log(firstElement)  << This would print out the first element which is thing1


Normal check state function: REQUIRES import { useState } from 'react';

  const [checked, setChecked] = useState(false)

Check state function using useReducer: REQUIRES import { useReducer } from 'react';

  const [checked, setChecked] = useReducer((checked) => !checked, false)
  
  <input type="checkbox" value={checked} onChange={setChecked}/>

Creating a popup box/notification 

  alert(`${title}, ${color}`)


*/