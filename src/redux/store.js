import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./slices/userSlice";
import { getAllUsersReducer } from "./slices/allUsersSlice";
const store = configureStore({
    reducer:{
        auth: authReducer,
        users: getAllUsersReducer
    }
})


export default store;