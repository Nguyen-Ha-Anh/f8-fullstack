import './App.css'
import { useState, useMemo } from 'react';
import ProductList from './components/ProductList';

const products = [
  { id: 1, name: 'Áo thun thể thao', price: 350000, category: 'Áo', brand: 'Nike' },
  { id: 2, name: 'Quần jogger', price: 750000, category: 'Quần', brand: 'Adidas' },
  { id: 3, name: 'Nón lưỡi trai', price: 250000, category: 'Phụ kiện', brand: 'Puma' },
  { id: 4, name: 'Áo hoodie', price: 1200000, category: 'Áo', brand: 'Nike' },
];
function App() {
  const [price, setPrice] = useState('All')
  const [category, setCategory] = useState('All')
  const [brand, setBrand] = useState('All')

  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');

    return products.filter((product) => {
      const priceMatch = 
        price === 'All' || 
        (price === 'Under 500' && product.price < 500000) ||
        (price === '500 - 1000' && product.price >= 500000 && product.price <= 1000000) ||
        (price === 'Over 1000' && product.price > 1000000);

      const categoryMatch = category === 'All' || product.category === category

      const brandMatch = brand === 'All' || product.brand === brand

      return priceMatch && categoryMatch && brandMatch
    })
  }, [price, category, brand])

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1>Lọc Sản Phẩm</h1>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <select value={price} onChange={(e) => setPrice(e.target.value)}>
            <option>All</option>
            <option>Under 500</option>
            <option>500 - 1000</option>
            <option>Over 1000</option>
          </select>

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>Áo</option>
            <option>Quần</option>
            <option>Phụ kiện</option>
          </select>

          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option>All</option>
            <option>Nike</option>
            <option>Adidas</option>
            <option>Puma</option>
          </select>
        </div>

        <ProductList products={filteredProducts} />
      </div>
    </>
  )
}

export default App
