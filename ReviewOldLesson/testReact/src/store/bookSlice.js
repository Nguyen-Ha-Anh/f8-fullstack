import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const getBooks = createAsyncThunk('books/getBooks', async(__, thunkAPI) => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue('error loading')
    }
})

const initialState = {
    books: [],
    loading: false,
    error: null
}

//B4
export const deleteBook = createAsyncThunk('books/deleteBook', async(id, thunkAPI) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return id
    } catch (err) {
        return thunkAPI.rejectWithValue('error delete')
    }
})

//createBook, updateBook
// Thêm sách
export const createBook = createAsyncThunk('books/createBook', async(newBook, thunkAPI) => {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newBook)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue('error create')
  }
})

// Sửa sách
export const updateBook = createAsyncThunk('books/updateBook', async(updatedBook, thunkAPI) => {
  try {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedBook.id}`, updatedBook)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue('error update')
  }
})

//B4
const handleSubmit = () => {
  if (!form.title || !form.body) return alert('Vui lòng nhập đủ thông tin')

  if (editId) {
    dispatch(updateBook({ ...form, id: editId }))
  } else {
    dispatch(createBook(form))
  }

  // Reset form
  setForm({ title: '', body: '', id: null })
  setEditId(null)
}

const handleEdit = (book) => {
  setForm({
    title: book.title,
    body: book.body,
    id: book.id
  })
  setEditId(book.id)
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getBooks.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getBooks.fulfilled, (state, action) => {
            state.loading = false
            state.books = action.payload
        })
        .addCase(getBooks.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(deleteBook.fulfilled, (state, action) => {
            const id = action.payload
            state.books = state.books.filter(book => book.id !== id)
        })

        //
        .addCase(createBook.fulfilled, (state, action) => {
            state.books.unshift(action.payload) // thêm vào đầu danh sách
        })

        .addCase(updateBook.fulfilled, (state, action) => {
            const updated = action.payload
            const index = state.books.findIndex(book => book.id === updated.id)
            if (index !== -1) {
                state.books[index] = updated
            }
        })

    }
})

export default bookSlice.reducer