import { createSlice } from "@reduxjs/toolkit";
import { QuestionList } from "../type";

export interface FormState {
    list?: FormList[] | undefined
}
export interface FormList {
    id: string,
    questionList?: QuestionList | undefined,
}

const saveFormToLocalStorage = (list: any) => {
    try {
        localStorage.setItem("formList", JSON.stringify(list))
    } catch (error) {

    }
}
const initialState: FormState = {
    list: []
}

const homeSlice = createSlice({
    name: 'formList',
    initialState,
    reducers: {
        addNewForm: (state: any, action: any) => {
            state.list.push(action.payload)
            saveFormToLocalStorage(state.list)
        },
        editForm: (state: any, action: any) => {
            console.log("action.paylaod2", action.payload);
            state.list = state.list.map((item: { id: string, data: any }) => {
                return (
                    item.id === action.payload.id
                        ? { ...item, ...action.payload.data }
                        : { ...item }
                )
            })
            console.log("state.list", state.list);
            saveFormToLocalStorage(state.list)
        },
        deleteForm: (state: any, action: any) => {
            console.log('action.payload:', action.payload);
            const currentForm = state.list.filter((form: any) => form.id !== action.payload)
            state.list = currentForm
            saveFormToLocalStorage(state.list)
        },
        submitForm: (state: any, action: any) => {
            state.list = state.list.map((item: { id: string, data: any }) => {
                return (
                    item.id === action.payload.id
                        ? { ...item, ...action.payload.data }
                        : { ...item }
                )
            })
            saveFormToLocalStorage(state.list)
        },
        getDataFormLocal: (state: any, action: any) => {
            state.list = action.payload
            console.log("action.payload:", action.payload);
        }

    }
})

export default homeSlice;