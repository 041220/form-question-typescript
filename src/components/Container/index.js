import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormQuestion from "../FormQuestion";
import Question from "../Questions";
import Title from "../Title";
import containerSlice from "./containerSlice";

const Container = () => {

    const questionList = useSelector(state => state.questionList.questions)

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("log 1");
        setTimeout(() => {
            localStorage.setItem("questionList", JSON.stringify(questionList))
        }, 100)
    }, [dispatch, questionList])

    useEffect(() => {
        console.log("log 2");
        const getQuestions = localStorage.getItem("questionList")
        if (getQuestions) {
            dispatch(containerSlice.actions.getDataLocal(JSON.parse(getQuestions)))
        }
    }, [dispatch])
    console.log("check2:",);
    return (
        <>

            <Title />
            {/* <Button>Add Question</Button> */}
            <FormQuestion />
            {
                questionList.map(question => {
                    return (

                        <Question key={question.id} question={question} />

                    )
                })
            }

        </>
    )

}

export default Container;