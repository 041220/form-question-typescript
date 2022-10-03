import { configureStore } from "@reduxjs/toolkit";
import containerSlice from "../components/Container/containerSlice";
import homeSlice from "../components/Home/homeSlice";




const store = configureStore({
    reducer: {
        questionList: containerSlice.reducer,
        formList: homeSlice.reducer,
    },


})

export default store;