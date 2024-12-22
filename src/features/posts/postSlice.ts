import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from "../../store/store" 

type Post = {
    id?: number,
    userId: number,
    title: string,
    body: string
}

type PostState = {
    posts: Post[],
    loading: boolean,
    error: string | null
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data
})

export const createPost = createAsyncThunk('post/addPost', async (post: Post) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    return response.data
})



const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchPosts.fulfilled, (state, { payload}) => {
            state.posts = payload;
            state.loading = false;
        })
        builder.addCase(fetchPosts.rejected, (state, { error }) => {
            state.loading = false;
            state.error = error.message || "Failed to fetch posts";
        })
        builder.addCase(createPost.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(createPost.fulfilled, (state, { payload }) => {
            state.posts.push(payload);
        })
        builder.addCase(createPost.rejected, (state, { error}) => {
            state.error = error.message || "Failed to create post"
        })
    }
})

export const selectFetchPosts = (state: RootState) => state.post.posts;

export default postSlice.reducer;