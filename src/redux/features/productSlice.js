import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


const initialState={productArray:[],loading:false,err:{}}
const baseUrl='https://fakestoreapi.com/products'

export const fetchProducts=createAsyncThunk('products/fetchProducts',()=>{
    return fetch(baseUrl)
    .then((res) => res.json())
    .then((json) => json)
    .catch(err=>console.log(err))
})

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            console.log('products',state,action)
        }
    },
    extraReducers:{
        [fetchProducts.pending]:(state)=>{
            state.loading=true
        },
        [fetchProducts.fulfilled]:(state,action)=>{
            state.productArray=action.payload
            state.loading=false
        },
        [fetchProducts.rejected]:(state,action)=>{
            state.err=action.payload
            state.loading=false
        }
    }
})
export const { addProduct } = productSlice.actions
export default productSlice.reducer



