import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
