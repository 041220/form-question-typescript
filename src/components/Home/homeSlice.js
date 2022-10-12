import { createSlice } from "@reduxjs/toolkit";
const saveFormToLocalStorage = (list) => {
    try {
        localStorage.setItem("formList", JSON.stringify(list))
    } catch (error) {

    }
}
const homeSlice = createSlice({
    name: 'formList',
    initialState: {
        list: [],
    },
    reducers: {
        addNewForm: (state, action) => {
            state.list.push(action.payload)
            saveFormToLocalStorage(state.list)
        },
        editForm: (state, action) => {
            console.log("action.paylaod2", action.payload);
            state.list = state.list.map((item) => {
                return (
                    item.id === action.payload.id
                        ? { ...item, ...action.payload.data }
                        : { ...item }
                )
            })
            console.log("state.list", state.list);
            saveFormToLocalStorage(state.list)
        },
        deleteForm: (state, action) => {
            console.log('action.payload:', action.payload);
            const currentForm = state.list.filter(form => form.id !== action.payload)
            state.list = currentForm
            saveFormToLocalStorage(state.list)
        },
        submitForm: (state, action) => {
            state.list = state.list.map((item) => {
                return (
                    item.id === action.payload.id
                        ? { ...item, ...action.payload.data }
                        : { ...item }
                )
            })
            saveFormToLocalStorage(state.list)
        },
        getDataFormLocal: (state, action) => {
            state.list = action.payload
            console.log("action.payload:", action.payload);
        }

    }
})

export default homeSlice;