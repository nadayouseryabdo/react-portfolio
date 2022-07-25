
//action
const ADD_TODO ='ADD_TODO'
const DELETE_TODO ='DELETE_TODO'

export const addNewTodo=(payload)=>{
    return{
        type:ADD_TODO,
        payload
    }
}
export const DeleteOneTodo=(payload)=>{
    return{
        type:DELETE_TODO,
        payload
    }}

//initialstate
const initialState = {todos:[]}

//reducer
export const todoReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {...state,todos:[...state.todos,action.payload]}
        case DELETE_TODO:
            return {...state,todos:[...state.todos.filter((item,index)=>index !==action.payload)]}
        default:
            return state
    }
}