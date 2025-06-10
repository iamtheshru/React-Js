import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../data/products/productsSlice.js"
import userReducer from "../data/features/userSlice.js"
import authReducer from "../data/auth/authSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsSlice,
        user: userReducer,
    }
});

