import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    totalTodos: 4,
    todos: [
        {
            id: 1,
            heading: "complete 5 react chapters",
            details: "learned about higher order components",
            status: "incomplete",
            priority: "top"
        },
        {
            id: 2,
            heading: "complete 5 react chapters",
            details: "learned about higher order components",
            status: "incomplete",
            priority: "mid"
        },
        {
            id: 3,
            heading: "complete 5 react chapters",
            details: "learned about higher order components",
            status: "incomplete",
            priority: "low"
        },
        {
            id: 4,
            heading: "complete 5 react chapters",
            details: "learned about higher order components",
            status: "incomplete",
            priority: "low"
        },
    ]
}
const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: state.totalTodos + 1,
                ...action.payload
            }
            state.todos.push(newTodo)
            state.totalTodos++;
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(e => e.id != action.payload.id)
        },
        editTodo: (state, action) => {
            const updatedTodos = state.todos.map(e => {
                if (e.id === action.payload.id) {
                    return action.payload
                } else {
                    return e
                }
            })
            return {
                ...state,
                todos: updatedTodos
            }
        },
        completeTodo: (state, action) => {
            const updatedTodos = state.todos.map(e => {
                if (e.id === action.payload) {
                    return {
                        ...e,
                        status: "complete"
                    }
                } else {
                    return e
                }
            })
            return {
                ...state,
                todos: updatedTodos
            }
        },
        setPriority: (state, action) => {
            const { id, priority } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.priority = priority;
            }
        }
    }
})
export default todosSlice.reducer
export const { addTodo, setPriority, deleteTodo, editTodo, completeTodo } = todosSlice.actions