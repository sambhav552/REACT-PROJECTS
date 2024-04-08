import {useContext,createContext} from "react"

export const ToDoContext=createContext({
    todos:[{
        id:1,
        todo:"ToDo msg",
        completed:false,
    }],
    addToDo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useToDo=()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider=ToDoContext.Provider