import { FormControl, FormControlLabel, Input, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Options, Questions } from "../type";
import './index.css'
import { ListAnswer } from "../type";

interface PropsAnswer {
    question: Questions,
    listAnswer: ListAnswer[],
    setListAnswer: (value: SetListAnswer[]) => void,
    index: number,
}
interface SetListAnswer {
    id: string,
    answer: string,
}

const QuestionsInProgress: React.FC<PropsAnswer> = ({ question, listAnswer, setListAnswer, index }) => {
    const [questionName, setQuestionName] = useState('');
    const [typeQuestion, setTypeQuestion] = useState('1');

    useEffect(() => {
        setQuestionName(question.name)
        setTypeQuestion(question.type)
    }, [question])

    const handleChangeAnswer = (e: any) => {
        console.log(e.target.value);
        const dataAnswers = listAnswer?.map((item) => {
            return (
                item.id === question.id
                    ? { ...item, answer: e.target.value }
                    : { ...item }
            )
        })
        setListAnswer(dataAnswers)
    }
    //check type của question
    const checkTypeQuestion = () => {
        if (typeQuestion === '1') {
            return (
                <div><Input style={{ marginTop: '10px' }} onChange={handleChangeAnswer} placeholder='Nhập câu trả lời' /></div>
            )
        }
        else if (typeQuestion === '2') {
            return (
                <div>
                    <FormControl>
                        <RadioGroup onChange={handleChangeAnswer}>

                            {
                                (question.options as Options[]).map((option) => (
                                    <div className="option" key={option.key} >
                                        <FormControlLabel control={<Radio />} value={option.name} label={option.name} />
                                    </div>
                                )
                                )
                            }
                        </RadioGroup>
                    </FormControl>
                </div>
            )
        }
    }
    return (

        <div className="question-2">

            <div className="container-question-2">

                <div className="question-name">Question {index + 1}: {questionName}</div>

            </div>
            {checkTypeQuestion()}


        </div >


    )

}

export default QuestionsInProgress;


