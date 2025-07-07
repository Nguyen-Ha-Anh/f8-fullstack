import { useState } from 'react'
import './App.css'

function App() {
  //B1
  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: '',
    unit: ''
  })

  //B2
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

    // console.log('form hien tai:', {
    //   ...form,
    //   [e.target.name]: e.target.value
    // })

    const handleAdd = () => {
      const newProduct = {
        id: Date.now().toString(),
        name: form.name,
        price: form.price,
        quantity: form.quantity,
        unit: form.unit,
      }

      console.log('new product:', newProduct)
    }
  }

  return (
    <>
    
      <input 
      type="text"
      name='name'
      value={form.name}
      onChange={handleChange}
      />
      <input 
      type="number"
      name='price'
      value={form.name}
      onChange={handleChange}
      />
      <input 
      type="number"
      name='quantity'
      value={form.name}
      onChange={handleChange}
      />
    </>
  )
}

export default App
