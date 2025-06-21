import { useEffect, useState } from 'react';
import './App.css'
import { dividerClasses } from '@mui/material';
function App() {
  const [time, setTime] = useState(10)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
      })
    })
  })

  return (
    <>
    <h1>Time</h1>
    <p>{time}</p>
    </>
  )

  
}

export default App
