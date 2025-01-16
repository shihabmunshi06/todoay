import { configureStore } from "@reduxjs/toolkit"
import filtersReducer from "./features/filters"
import todosReducer from "./features/todos"

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        todos: todosReducer
    }
})

export default store