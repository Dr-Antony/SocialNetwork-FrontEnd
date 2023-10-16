import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  instance  from '../../Axios/axios';



export const fetchRegistration = createAsyncThunk('auth/fetchRegistration', async (params) => {
    const { data } = await instance.post('/auth/register', params);
    
    console.log(data)
    return data
})



export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (params) => {
    const {data} = await instance.post('/auth/login', params);
    return data;
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const { data } = await instance.get('/auth/me')
    return data;
})

const initialState = {
    data: null,
    status: 'loading'
}


// {
//     userName: null,
//     email: null,
//     phone: null,
//     address: null,
//     profession: null,
//     website: null,
//     github: null,
//     twitter: null,
//     instagram: null,
//     facebook: null
// }



export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchAuthMe.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fetchAuthMe.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        [fetchLogin.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fetchLogin.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },
        [fetchRegistration.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchRegistration.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fetchRegistration.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        }
    }
})
export const { logout } = userSlice.actions;
export const userIsAuth = (state) => Boolean(state.auth.data)
export const authReducer = userSlice.reducer;