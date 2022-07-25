import { createSlice } from '@reduxjs/toolkit'

//initialstate
const initialState = {todos:[]}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addNewTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        DeleteOneTodo:(state,action)=>{
            state.todos=state.todos.filter((item,index)=>{
                return index !== action.payload
            })
        }
    }
})
export const { addNewTodo, DeleteOneTodo }= todoSlice.actions
export default todoSlice.reducer
