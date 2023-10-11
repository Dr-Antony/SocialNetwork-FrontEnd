import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import instance from '../../Axios/axios';


export const fetchGetAllUsers = createAsyncThunk('users/getAllUsers', async () => {
    debugger
    const { data } = await instance.get('/users')
    debugger
    return data;
})


const initialState = {
    data: null,
    status: 'loading'
};


export const allUsersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [fetchGetAllUsers.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchGetAllUsers.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fetchGetAllUsers.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        }
    }
})


export const getAllUsersReducer = allUsersSlice.reducer;