import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //ref
  let [count, setCount] = useState(0)

  const onClick = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }

  // console.log('render again')

  //vue - watch
  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={onClick}>click me</button>
    </>
  )
}

export default App
