
import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Văn A', isFriend: false },
    { id: 2, name: 'Trần Thị B', isFriend: false },
    { id: 3, name: 'Lê Văn C', isFriend: false }
  ])
  
  return (
    <>
      <div>
        <h1>Friend List</h1>
        
      </div>
    </>
  )
}

export default App
