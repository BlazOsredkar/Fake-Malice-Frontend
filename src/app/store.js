import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../auth/userSlice";


export const store = configureStore ({
    reducer: {
        user: userSlice,
    }
})