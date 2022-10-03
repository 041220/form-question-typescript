import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "../components/Container/containerSlice";
import HomeSlice from "../components/Home/homeSlice";



const store = configureStore({
    reducer: {
        questionList: containerSlice.reducer,
        formList: HomeSlice.reducer,
    },


})

export default store;