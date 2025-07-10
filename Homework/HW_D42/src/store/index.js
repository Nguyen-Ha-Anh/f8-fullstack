import contactReducer from "./contactSlice";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        contact: contactReducer
    }
})

export default store