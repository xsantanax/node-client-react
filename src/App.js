import "./App.css"
import { useEffect, useState } from "react"

const apiUrl = "https://node-server-theta.vercel.app/"
// const apiUrl = "http://localhost:5000"

function App() {
  const [serverData, setServerData] = useState({})

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setServerData(data)
      })
  }, [])

  return (
    <div className="App">
      <div>Server message: {serverData?.message}</div>
    </div>
  )
}

export default App
