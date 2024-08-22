import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

let initialState = {
    user: null,
    isAuthReady: false,
};

let userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload
        },
        logOut: (state) => {
            state.user = null
        },
        isAuthChange: (state) => {
            state.isAuthReady = true
        },
    }
})

export let { login, logOut, isAuthChange } = userSlice.actions
export default userSlice.reducer