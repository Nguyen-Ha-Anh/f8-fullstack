import { useEffect, useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteBook, getBooks, createBook, updateBook } from './store/bookSlice';

function App() {
  const dispatch = useDispatch()
  const {books, loading, error} = useSelector(state => state.book)

  useEffect(() => {
    dispatch(getBooks())
  }, [])


  const [search, setSearch] = useState('')
  
  const filterBooks = books.filter(book => {
    const title = book.title.toLowerCase()
    const body = book.body.toLowerCase()
    return title.includes(search) || body.includes(search)
  })

  const [form, setForm] = useState({
    id: null,
    title: '',
    body: ''
  })

  const [editId, setEditId] = useState(null)

  return (
    <>
      <h1>List book</h1>

      <input 
      type="text"
      placeholder='search book'
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      {loading && <p>Loaidng..</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}

      <h2>{editId ? 'Sửa sách' : 'Thêm sách mới'}</h2>
      <input
        type="text"
        placeholder="Tiêu đề"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Nội dung"
        value={form.body}
        onChange={(e) => setForm({ ...form, body: e.target.value })}
      />
      <button onClick={handleSubmit}>
        {editId ? 'Lưu chỉnh sửa' : 'Thêm mới'}
      </button>

      {filterBooks.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.body}</p>
          <button onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
          <button onClick={() => handleEdit(book)}>Sửa</button>
        </div>
      ))}
    </>
  )
}

export default App
