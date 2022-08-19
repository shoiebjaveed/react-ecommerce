import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const ESTATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const cartProducts = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: ESTATUS.IDLE
    },
    reducers: {
        setProducts(state, action){
            state.data = action.payload;
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }
})

export const { setProducts, setStatus } = cartProducts.actions;
export default cartProducts.reducer;


export function fetchProducts(){
    return async function(dispatch, getState){
        dispatch(setStatus(ESTATUS.LOADING))
        try {
            const res = axios.get('https://crudcrud.com/api/7c91f9ec64564769a14f4e3363c5a969/cartAdmin').then((product) => dispatch(setProducts(product.data)))
            await res
            
            dispatch(setStatus(ESTATUS.IDLE))
        } catch (err) {
            alert(err);
            dispatch(setStatus(ESTATUS.ERROR))
        }
    }
}