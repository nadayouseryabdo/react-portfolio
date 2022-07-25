// import { createStore } from "redux";
// import { todoReducer } from './oldredux'

//store
// export const store = createStore(
//     todoReducer
// )

import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from './features/todoSlice'
import  productSlice  from './features/productSlice'

export const store = configureStore({
  reducer:{
    tReducer:todoSlice,
    pReducer:productSlice
  } 
})