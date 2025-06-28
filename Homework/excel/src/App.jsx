import './App.css'
import { EditableTable } from './component'
import { useState } from 'react'

const columns = [
  {name: 'product'},
  {name: 'quantity'},
  {name: 'price'},
  {name: 'amount'},
  {name: 'comment'}
]

function App() {
  const [rows, setRows] = useState([
      {
        id: 1,
        product: 'product 1',
        quantity: 50,
        price: 10000,
        amount: 50000,
        comment: 'this is comment'
      },
      {
        id: 1,
        product: 'product 2',
        quantity: 50,
        price: 10000,
        amount: 50000,
        comment: 'this is comment'
      }
])

  return (
    <>
      <EditableTable columns={columns} rows={rows}/>
    </>
  )
}

export default App
