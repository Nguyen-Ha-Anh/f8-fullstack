import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 'p001',
      name: 'Táo Mỹ',
      price: 85000,
      quantity: 20,
      unit: 'kg'
    },
    {
      id: 'p002',
      name: 'Cam Úc',
      price: 65000,
      quantity: 15,
      unit: 'kg'
    }
  ]
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      addProduct: (state, action) => {
        state.products.push(action.payload)
      },
      removeProduct: (state, action) => {
        const idToRemove = action.payload
        state.products = state.products.filter(p => p.id !== idToRemove)
      },
      updateProduct: (state, action) => {
        const update = action.payload
        const index = state.products.findIndex(p => p.id === update.id)
        if (index !== -1) {
          state.products[index] = update
        }
      }
    }
})


export const {addProduct, removeProduct, updateProduct} = productSlice.actions
export default productSlice.reducer