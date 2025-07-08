import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct, createProduct, updatedProduct } from "./store/productSlice";

function App() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const [search, setSearch] = useState("");

  const filterProduct = products.filter((product) => {
    const name = product.name.toLowerCase()
    const categoryId = product.categoryId.toLowerCase()
    const orderNum = product.orderNum.toString().toLowerCase()
    return (
      name.includes(search) ||
      categoryId.includes(search) ||
      orderNum.includes(search)
    );
  });

  const [form, setForm] = useState({
    id: null,
    name: '',
    categoryId: '',
    orderNum: ''
  })

  const handleSubmit = () => {
    if (!form.name || !form.categoryId || !form.orderNum) return alert('Enter full information')

    if (editId) {
      dispatch(updatedProduct({ ...form, id: editId }))
    } else {
      const { name, categoryId, orderNum } = form
      dispatch(createProduct({name, categoryId, orderNum}))
    }

    setForm({ name: '', categoryId: '', orderNum: '' })
    setEditId(null)
  }

  const handleEdit = (product) => {
    setForm({
      name: product.name,
      categoryId: product.categoryId,
      orderNum: product.orderNum,
      id: product.id
    })
    setEditId(product.id)
  }

  const [editId, setEditId] = useState(null)

  return (
    <>
      <div>
        <h1 style={{marginBottom: '10px', display: 'flex', justifyContent: 'center'}}>Quan Ly San Pham</h1>

        <input
          type="text"
          placeholder="search product"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          style={{padding: '10px'}}
        />

        {loading && <p>Loading..</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Directory"
          value={form.categoryId}
          onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
        />
        <input
          type="text"
          placeholder="Numerical"
          value={form.orderNum}
          onChange={(e) => setForm({ ...form, orderNum: e.target.value })}
        />

        <button onClick={handleSubmit}>
          {editId ? 'Save edit' : 'Add new'}
        </button>
        
        <table style={{borderBottom: '1px solid #ccc'}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name Product</th>
              <th>Directory</th>
              <th>Numerical</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterProduct.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.categoryId}</td>
                <td>{product.orderNum}</td>
                <td>
                  <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
                  <button onClick={() => handleEdit(product)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
