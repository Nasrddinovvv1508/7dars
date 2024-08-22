import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./app/userSlice";
import productSlice from "./app/productSlice";

let store = configureStore({
    reducer: {
        user: userSlice,
        products: productSlice,
    }
});

export default store