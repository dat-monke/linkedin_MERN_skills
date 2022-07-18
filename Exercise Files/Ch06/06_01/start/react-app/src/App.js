import { render } from "react-dom";
import "./App.css";
// import { useState, useEffect } from "react";

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

// // You can paste a GraphQL query here
// const query = `
// query {
//   allLifts {
//     name
//     elevationGain
//     status
//   }
// }`

// // Specify the query 
// const opts = {
//   method: "POST",
//   headers:{"Content-Type": "application/json"},
//   // Below is sending the query from above through the POST
//   body: JSON.stringify({ query })
// }

// The format of the information coming in
// function Lift({ name, elevationGain, status}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{elevationGain} {status}</p>
//     </div>
//   )
// }

const tahoe_peaks = [
  { name: "Freel", elevation: 10891}, 
  { name: "Monument", elevation: 10067}, 
  { name: "Pyramid", elevation: 9983}, 
  { name: "Tallac", elevation: 9735}, 
  { name: "Ur mom's house", elevation: 1234}, 
]

// It takes the data, renders the data individualy, renderEmpty is in case it is empty
function List( {data, renderItem, renderEmpty}) {
  // "?" is a shorthand of if statement, so this is saying: if it is empty return false
  return !data.length ? renderEmpty : 
  <ul>
    {data.map((item) => (
    <li 
      key={item.name}>
      {renderItem(item)}
    </li>
    ))}
  </ul>
}

function App() {
  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)
  // const [loading, setLoading] = useState(false)

  // To fetch the data from a site
  // useEffect(() => {
  //   setLoading(true)
  //   fetch(`https://snowtooth.moonhighway.com`, opts)
  //   .then((response) => response.json())
  //   .then(setData)
  //   .then(() => setLoading(false))
  //   .catch(setError)
  // }, []);

  // Display loading if the information is loading, if it errors out print out the error, if there is no data return null
  // if(loading) return <h1>Loading...</h1>
  // if(error) return <pre>{JSON.stringify(error)}</pre>
  // if (!data) return null
  // console.log(data, "DATA")

  return (
    <div> 
      {/* Pulling in all the information and mapping them individually based on the Lift function */}
      {/* {data.data.allLifts.map((lift) => (
        <Lift 
        name={lift.name}
        elevationGain={lift.elevationGain}
        status={lift.status}/>
      ))} */}
      <List 
        data={tahoe_peaks}
        renderEmpty={<p>This list is empty</p>}
        renderItem={item => <>{item.name} - {item.elevation} ft.</>} />
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