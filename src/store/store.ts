import { configureStore } from "@reduxjs/toolkit";


import postReducer from "../features/posts/postSlice";

 const store = configureStore({
    reducer: {
        post: postReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;