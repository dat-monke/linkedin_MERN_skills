import "./App.css";
import { useState, useEffect } from "react";

// This function uses the Github API to create and populate parts of the webpage

// function GithubUser({ name, location, avatar}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{location}</p>
//       <img src={avatar} height={150} alt={name}/> 
//     </div>
//   )
// }

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}`

const opts = {
  method: "POST",
  headers:{"Content-Type": "applicatoin/json"},
  body: JSON.stringify(query)
}

function Lift({ name, elevationGain, status}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://snowtooth.moonhighway.com`, opts)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
  }, []);

  if(loading) return <h1>Loading...</h1>
  if(error) return <pre>{JSON.stringify(error)}</pre>
  if (!data) return null
  console.log(data, "DATA")

  return (
    <div> 
      {data.data.allLifts.map((lift) => (
        <Lift 
        name={lift.name}
        elevationGain={lift.elevationGain}
        status={lift.status}/>
      ))}
    </div>
  )
  // if(data)
    // return <GithubUser name={data.name} location={data.location} avatar={data.avatar_url}/>
  // return <h1>Data</h1>
}

export default App;

/* 
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  This allows you to use the API for Github and fetch data, catch errors, and give response
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.github.com/users/dat-monke`)
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
  }, []);

  if(loading) return <h1>Loading...</h1>
  if(error) return <pre>{JSON.stringify(error)}</pre>
  if (!data) return null

  // if(data)
    return <GithubUser name={data.name} location={data.location} avatar={data.avatar_url}/>
  // return <h1>Data</h1>

*/ 