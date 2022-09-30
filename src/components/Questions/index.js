import { Button, FormControl, FormControlLabel, Input, Radio, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import './index.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import containerSlice from "../Container/containerSlice";



const Question = ({ question, editId, setEditId }) => {
    const [questionName, setQuestionName] = useState('');
    const [typeQuestion, setTypeQuestion] = useState('1');


    const dispatch = useDispatch();

    // console.log("check question @", question);
    useEffect(() => {
        setQuestionName(question.name)
        setTypeQuestion(question.type)
    }, [question])

    const handleDeleteQuestion = (id) => {
        console.log("check id: ", id);
        dispatch(containerSlice.actions.deleteQuestion({ id }))
    }

    const checkTypeQuestion = () => {
        if (typeQuestion === '1') {
            return (
                <div>
                    <Input style={{ marginTop: '10px' }} placeholder='Nhập câu trả lời' />
                </div>
            )
        }
        else if (typeQuestion === '2') {

            return (
                <div>
                    <FormControl>
                        <RadioGroup >
                            {
                                question.options.map((option) => (
                                    <div className="option" key={option.key}>
                                        <FormControlLabel control={<Radio checked={false} />} value={option.key} label={option.name} />
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

    const handleChangeEditId = (id) => {
        setEditId(id)
    }

    return (

        <div className="question-2">

            <div className="container-question-2">

                <div className="question-name">{questionName}</div>

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


