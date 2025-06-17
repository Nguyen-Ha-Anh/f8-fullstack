import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'

function App() {
  const [products, setProducts] = useState ([
    { id: 1, name: 'Áo thun', price: 100000 },
    { id: 2, name: 'Quần jeans', price: 200000 },
    { id: 3, name: 'Giày thể thao', price: 500000 }
  ])

  return (
    <>
     <h1>products list</h1>
     <ProductList products={products} />
    </>
  )
}

export default App
