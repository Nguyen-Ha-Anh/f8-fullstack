import {configureStore} from '@reduxjs/toolkit';
import productReducer from './components/productSlice.js'

const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store