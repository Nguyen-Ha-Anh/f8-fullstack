// import { useState } from "react";
// import './App.css'
// import {CalcBtn} from './compo'
// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <div className="{'screen"></div>
// //       </div>
// //     </>
// //   )
// // }

// // props

// // component
// const CalcBtn = (props) => {
//   const {text, backgroundColor} = props

//   const onclick = () => {
//     console.log('onclick')
//   }

//   return (
//     <div
//     className={'btn'}
//     onclick={() => onclick()}
//     style={{backgroundColor}}
//     >
//       {text}
//     </div>
//   )
// }

// function App() {

//   return (
//     <>
//       <div>
//         <div className={'screen'}></div>
//         <div className={'keyboard'}>
//           <CalcBtn text={1} backgroundColor={'red'}/>
//           <CalcBtn text={2} backgroundColor={'blue'}/>
//           <CalcBtn text={3} backgroundColor={'green'}/>
//           <CalcBtn text={4} backgroundColor={'pink'}/>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

import './App.css'
// import {} from './components'

const Cell = () => {
  return (
    <td>test</td>
  )
}

const Row = () => {
  return (
    <tr>
      <Cell/>
      <Cell/>
      <Cell/>
    </tr>
  )
}

function App() {

  const columns = ['id', 'name', 'age']
  const rows = [
    {id: 1, name: 'viet', age: 23},
    {id: 2, name: 'viet nam', age: 23},
    {id: 3, name: 'nam viet', age: 23},
  ]

  const id = () => {
    return (
      <td></td>
    )
  }

  return (
    <>
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>

        <tbody>
          <Row/>
          <Row/>
          <Row/>
        </tbody>
      </table>
    </>
  )
}

export default App