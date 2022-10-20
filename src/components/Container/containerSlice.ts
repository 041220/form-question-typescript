import { createSlice } from "@reduxjs/toolkit";
import { QuestionList } from "../type";

// const saveQuestionsToStorage = (questions, title, description) => {
//     try {
//         localStorage.setItem("questionList", JSON.stringify({ questions, title, description }));
//     } catch (err) {

//     }
// }
const initialState: QuestionList = {
    title: '',
    description: '',
    questions: [],
}

const containerSlice = createSlice({
    name: 'questionList',
    initialState,
    reducers: {
        titleQuestion: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            // saveQuestionsToStorage(state.questions, state.title, state.description)

        },
        addNewQuestion: (state: any, action: any) => {
            state.questions.push(action.payload)
            // saveQuestionsToStorage(state.questions)
        },
        editQuestion: (state: any, action: any) => {
            // console.log("action.payload:", action.payload);
            state.questions = state.questions.map((item: any) => {
                console.log("item", item);
                return (
                    item.id === action.payload.id
                        ? { ...item, ...action.payload.data }
                        : { ...item }
                )
            })
            // saveQuestionsToStorage(state.questions)
        },

        deleteQuestion: (state: any, action: any) => {
            let currentQuestion = state.questions.filter((question: any) => question.id !== action.payload)
            state.questions = currentQuestion;
            // saveQuestionsToStorage(state.questions)
        },
        resetForm: (state: any) => {
            state.title = ''
            state.description = ''
            state.questions = []
        },
        getData: (state: any, action: any) => {
            console.log(action.payload);
            state.questions = action.payload?.questions;
            state.title = action.payload?.title;
            state.description = action.payload?.description;

        },


    }
})

export default containerSlice;