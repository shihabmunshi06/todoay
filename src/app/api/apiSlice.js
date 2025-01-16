import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const apiSlice = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: ""
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/all"
        })
    })
})