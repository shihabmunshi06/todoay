import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "all",
    priority: []
}

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload
        },
        setPriority: (state, action) => {
            if (state.priority.includes(action.payload)) {
                state.priority = state.priority.filter(e => e !== action.payload);
            } else {
                state.priority.push(action.payload);
            }
        },
    }
})

export default filtersSlice.reducer
export const { setStatus, setPriority } = filtersSlice.actions