import { configureStore } from "@reduxjs/toolkit";
import loginRedure from '../feacharse/loginSlice.tsx'

export const store = configureStore({
    reducer: {
        userdata: loginRedure,
    }
});