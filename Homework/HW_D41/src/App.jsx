import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { addProduct, removeProduct, updateProduct } from './store/store/components/productSlice'

function App() {
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: '',
    unit: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleAdd = () => {
    const newProduct = {
      id: edit || Date.now().toString(),
      name: form.name,
      price: form.price,
      quantity: form.quantity,
      unit: form.unit
    }

    if (edit) {
      dispatch(updateProduct(newProduct))
      setEdit(null)
    } else {
      dispatch(addProduct(newProduct))
    }

    setForm({
      name: '',
      price: '',
      quantity: '',
      unit: ''
    })
    return 
  }
  const handleDelete = (id) => {
    dispatch(removeProduct(id))
  }

  const [edit, setEdit] = useState(null)

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      unit: product.unit
    })
    setEdit(product.id)
  }

  return (
    <>
     <div>
      <h2>Add Product</h2>
      <input 
      type="text"
      name='name'
      placeholder='Name'
      value={form.name}
      onChange={handleChange}
      />
      <input 
      type="number"
      name='price'
      placeholder='Price'
      value={form.price}
      onChange={handleChange}
      />
      <input 
      type="number"
      name='quantity'
      placeholder='Quantity'
      value={form.quantity}
      onChange={handleChange}
      />
      <input 
      type="text"
      name='unit'
      placeholder='Unit'
      value={form.unit}
      onChange={handleChange}
      />

      <button onClick={handleAdd}>{edit ? 'update' : 'add product'}</button>
     </div>

     <table border="1" cellpadding="8" cellspacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.unit}</td>
                <td>
                  <button onClick={() => handleEdit(product)}>Sửa</button>
                  <button onClick={() => handleDelete(product.id)}>Xoá</button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
          </>
  )
}

export default App
