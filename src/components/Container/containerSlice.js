import { createSlice } from "@reduxjs/toolkit";

const containerSlice = createSlice({
    name: 'questionList',
    initialState: {
        title: '',
        description: '',
        questions: []
    },
    reducers: {
        addNewQuestion: (state, action) => {

            state.questions.push(action.payload)
        },
        getDataLocal: (state, action) => {
            console.log(action.payload);
            state.questions = action.payload

        }
    }
})

export default containerSlice;