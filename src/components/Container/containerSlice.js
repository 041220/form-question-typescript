import { createSlice } from "@reduxjs/toolkit";

const saveQuestionsToStorage = (questions, title, description) => {
    try {
        localStorage.setItem("questionList", JSON.stringify({ questions, title, description }));
    } catch (err) {

    }
}
// const saveTitleToStorage = (title) => {
//     try {
//         localStorage.setItem("questionList",JSON.stringify(title))
//     } catch (err) {

//     }
// }

const containerSlice = createSlice({
    name: 'questionList',
    initialState: {
        title: '',
        description: '',
        questions: []
    },
    reducers: {
        titleQuestion: (state, action) => {
            state.title = action.payload.title;
            state.description = action.payload.description;
            saveQuestionsToStorage(state.questions, state.title, state.description)

        },
        addNewQuestion: (state, action) => {
            state.questions.push(action.payload)
            saveQuestionsToStorage(state.questions)
        },
        editQuestion: (state, action) => {
            // console.log("action.payload:", action.payload);
            state.questions = state.questions.map((item) => {
                console.log("item", item);
                return (
                    item.id === action.payload.id
                        ? { ...item, ...action.payload.data }
                        : { ...item }
                )
            }

            )
            saveQuestionsToStorage(state.questions)
        },
        // deleteOption: (state, action) => {
        //     console.log("action.payload:", action.payload);
        //     console.log("state.option", state.options);
        //     let currentOption = state.questions.filter(option => option.key !== action.payload.key)
        //     state.options = currentOption;
        // },
        deleteQuestion: (state, action) => {
            let currentQuestion = state.questions.filter(question => question.id !== action.payload.id)
            state.questions = currentQuestion;
            saveQuestionsToStorage(state.questions)

        },
        getDataLocal: (state, action) => {
            console.log(action.payload);
            state.questions = action.payload.questions;
            state.title = action.payload.title;
            state.description = action.payload.description;

        },


    }
})

export default containerSlice;