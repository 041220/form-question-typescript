import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "../components/Container/containerSlice";



const store = configureStore({
    reducer: {
        questionList: containerSlice.reducer,
    },


})

export default store;