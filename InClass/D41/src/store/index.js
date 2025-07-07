import {createStore} from 'redux'

const initState = {
    products: [],
    count: 0
}

const reducer = (state, action) => {
    if (action.type === 'count/increase') {
        return {...state, count: state.count + 1}
    }
    if (action.type === 'product/addNew') {
        return {...state, product: [...state.product, action.value]}
    }
    if (action.type === 'products/delete') {
        const index = state.products.findIndex(e => e.id === action.value)
        
    }
    return {...state}
}

const store = createStore(reducer, initState)

export {
    store
}

