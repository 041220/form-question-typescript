import { Button, FormControl, FormControlLabel, Input, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import './index.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import containerSlice from "../Container/containerSlice";

interface PropsType {
    question: any,
    setEditId: (value: string | undefined) => void,
    index: number,
}
const Question: React.FC<PropsType> = ({ question, setEditId, index }) => {
    const [questionName, setQuestionName] = useState('');
    const [typeQuestion, setTypeQuestion] = useState<string>('1');


    const dispatch = useDispatch();

    // console.log("check question @", question);
    useEffect(() => {
        setQuestionName(question.name)
        setTypeQuestion(question.type)
    }, [question])
    // Delete 1 question 
    const handleDeleteQuestion = (id: string) => {
        console.log("check id: ", id);
        dispatch(containerSlice.actions.deleteQuestion(id))
    }
    //check type của question
    const checkTypeQuestion = () => {
        if (typeQuestion === '1') {
            return (
                <div><Input style={{ marginTop: '10px' }} placeholder='Nhập câu trả lời' /></div>
            )
        }
        else if (typeQuestion === '2') {
            return (
                <div>
                    <FormControl>
                        <RadioGroup >
                            {
                                question.options.map((option: { key: string, name: string }) => (
                                    <div className="option" key={option.key}>
                                        <FormControlLabel control={<Radio />} value={option.key} label={option.name} />
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

    const handleChangeEditId = (id: string) => {
        setEditId(id)
    }

    return (

        <div className="question-2">

            <div className="container-question-2">

                <div className="question-name">Question {index + 1}: {questionName}</div>

            </div>
            {checkTypeQuestion()}
            <div>
                <Button style={{ marginLeft: '81%' }} onClick={() => handleChangeEditId(question.id)}>
                    <EditIcon color="action" />
                </Button>
                <Button onClick={() => handleDeleteQuestion(question.id)}>
                    <DeleteIcon color="action" />
                </Button>

            </div>

        </div >


    )

}

export default Question;


