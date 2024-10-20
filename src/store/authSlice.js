import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
    },
    reducers: {
        login(state, action) {
            state.user = action.payload;
        }
    }
})

export const { login } = AuthSlice.actions;

export default AuthSlice.reducer