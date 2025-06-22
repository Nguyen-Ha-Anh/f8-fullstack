import { useState } from 'react'
import './App.css'
import axios from 'axios'
  
function App() {
  const [login, setLogin] = useState([])

  useEffect(() => {
    axios.get('https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com')
    .then((response) => {
      setLogin(response.data)
    })
    .catch(error => {
      console.error('Error', error)
    })
  }, [])

  return (
    <>
      <div>
        <h1></h1>
      </div>
    </>
  )
}

export default App
