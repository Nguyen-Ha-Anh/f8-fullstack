import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const getContacts = createAsyncThunk('contact/getContacts', async(__, thunkAPI) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue('error')
    }
})

export const updateContact = createAsyncThunk('contact/updateContact', async(contact, thunkAPI) => {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue('error update')
    }
})

export const deleteContact = createAsyncThunk('contact/deleteContact', async(id, thunkAPI) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        return id
    } catch (error) {
        return thunkAPI.rejectWithValue('error delete')
    }
})

export const createContact = createAsyncThunk('contact/createContact', async(contact, thunkAPI) => {
    try {
        const response = await axios.delete('https://jsonplaceholder.typicode.com/users', contact)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue('error create')
    }
})

const initialState = {
    contacts: [],
    loading: false,
    error: null
}


const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
    },
    //B1
    extraReducers: (builder) => {
        builder
        .addCase(getContacts.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getContacts.fulfilled, (state, action) => {
            state.loading = false
            state.contacts = action.payload
        })
        .addCase(getContacts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        //B3
        .addCase(updateContact.fulfilled, (state, action) => {
            const update = action.payload
            const index = state.contacts.findIndex(c => c.id === update.id)
            if (index !== -1) {
                state.contacts[index] = update
            }
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            const id = action.payload
            state.contacts = state.contacts.filter(c => c.id !== id)
        })

        //B4
        .addCase(createContact.fulfilled, (state, action) => {
            state.contacts.upshift(action.payload)
        })
    }
})

export default contactSlice.reducer