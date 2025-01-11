import { configureStore } from '@reduxjs/toolkit'
import instagramReducer from "./Feature/Instagram/instagramSlice"

const store = configureStore({
    reducer : {
        instagram : instagramReducer,
    },
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware(),
    devtools : true
});

export default store;