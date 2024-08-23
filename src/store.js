import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./app/userSlice";
import productSlice from "./app/productSlice";

let store = configureStore({
    reducer: {
        user: userSlice,
        products: productSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [
                    "user/isAuthChange",
                    "user/login"
                ],
                ignoredPaths: [
                    'user.user',
                ]
            }
        })
});

export default store