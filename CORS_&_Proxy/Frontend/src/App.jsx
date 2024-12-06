import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [indexes, setIndexes] = useState([]);

  useEffect(() => {
    axios.get("/api/indexes")
    .then((response) => setIndexes(response.data))
    .catch((error) => console.error(error))
  });

  return (
    <>
      <h1>CORS And Proxy Practice</h1>
      <p>Indexes: { indexes.length }</p>

      {/* In callback function use () parenthesis for display 
          else use return keyword for {} curly brackets. */}
      {
        indexes.map((index, count) => (
          <div key={index.id}>
            <h3>{index.title}</h3>
            <p>{index.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
