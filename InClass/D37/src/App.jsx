import './App.css'
import React, { memo, useState } from 'react'


  const Com1 = memo(() => {
    console.log('Com1 rendered');
    return (
      <h1>component 1</h1>
    )
  })
  const Com2 = memo(() => {
    console.log('Com2 rendered');
    return (
      <h2>component 2</h2>
    )
  })

  const getSum = (n) => {
    let val = 0
    for (let i = 0; i <= n; i++) {
      val += i
    }
    return val
  }

  function App() {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(0)

  return (
    <>
      <Com1/>
      <Com2/>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => setAge(age + 1)}>age</button>
    </>
  )
}

export default App
