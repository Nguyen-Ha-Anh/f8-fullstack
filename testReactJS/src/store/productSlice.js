import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const getProduct = createAsyncThunk('products/getProducts', async(__, thunkAPI) => {
    try {
        const res = await axios.get('http://localhost:3000/products')
        return res.data
    } catch (err) {
        return thunkAPI.rejectWithValue('error loading')
    }
})

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const deleteProduct= createAsyncThunk('products/deleteProduct', async(id, thunkAPI) => {
    try {
        await axios.delete(`http://localhost:3000/products/${id}`)
        return id
    } catch (err) {
        return thunkAPI.rejectWithValue('error delete')
    }
})

export const createProduct = createAsyncThunk('products/createProduct', async(newProduct, thunkAPI) => {
  try {
    const res = await axios.post('http://localhost:3000/products', newProduct)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue('error create')
  }
})

export const updatedProduct = createAsyncThunk('products/updatedProduct', async(updatedProduct, thunkAPI) => {
  try {
    const res = await axios.put(`http://localhost:3000/products/${updatedProduct.id}`, updatedProduct)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue('error update')
  }
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getProduct.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        .addCase(getProduct.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            const id = action.payload
            state.products = state.products.filter(product => product.id !== id)
        })

        .addCase(createProduct.fulfilled, (state, action) => {
            state.products.unshift(action.payload)
        })

        .addCase(updatedProduct.fulfilled, (state, action) => {
            const updated = action.payload
            const index = state.products.findIndex(product => product.id === updated.id)
            if (index !== -1) {
                state.products[index] = updated
            }
        })

    }
})

export default productSlice.reducer