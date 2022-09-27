import { Button, FormControl, FormControlLabel, Input, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import containerSlice from "../Container/containerSlice";
import './index.css'


const FormQuestion = ({ question }) => {
    const [questionName, setQuestionName] = useState('');
    const [typeQuestion, setTypeQuestion] = useState('1');
    const [description, setDescription] = useState('');
    const [option, setOption] = useState([]);

    const dispatch = useDispatch();

    const handleAddNewQuestion = () => {
        dispatch(
            containerSlice.actions.addNewQuestion({
                id: v4(),
                isEdit: false,
                name: questionName,
                type: typeQuestion,
                ...(typeQuestion === '1' && { description, }),
                ...(typeQuestion === '2' && { option, })

            }))
        setQuestionName('');
        setDescription('');
    }
    console.log("description", description);
    // const handleQuestionTitle = (e) => {
    //     setQuestionTitle(e.target.value)
    //     console.log("title-question: ", e.target.value);
    // }
    const handleChangeText = (e) => {
        setDescription(e.target.value)
    }
    const handleQuestionName = (e) => {
        setQuestionName(e.target.value)
        console.log("questionname: ", e.target.value);
    }

    const handleChangeTypeQuestion = (e) => {
        setTypeQuestion(e.target.value)
        console.log("type:", e.target.value);
    }

    const checkTypeQuestion = () => {
        if (typeQuestion === '1') {
            return (
                <div>
                    <Input placeholder='Nhập đoạn' value={description} onChange={handleChangeText} />
                </div>
            )
        }
        else if (typeQuestion === '2') {
            const handleAddChoose = () => {
                return (
                    <FormControlLabel control={<Radio />} label="monkey" />
                )
            }

            return (
                <div>
                    <RadioGroup >
                        <FormControlLabel control={<Radio />} label="monkey" />
                        <FormControlLabel control={<Radio />} label="dragon" />
                        <FormControlLabel control={<Radio />} label="lion" />
                        <FormControlLabel control={<Radio />} label="dog" />

                    </RadioGroup>
                    <Button onlick={handleAddChoose}>Add Choose</Button>
                </div>
            )
        }
    }
    return (

        <div className="question">
            {/* <Input className="input-title" placeholder='Nhập tiêu đề' value={questionTitle} /> */}
            <div className="container-question">

                <Input className="input-question" placeholder='Nhập câu hỏi' value={questionName} onChange={handleQuestionName} />

                <Select

                    style={{ width: '200px' }}
                    className="select-type"
                    value={typeQuestion}
                    onChange={handleChangeTypeQuestion}

                >
                    <MenuItem value='1'>Đoạn</MenuItem>
                    <MenuItem value='2'>Trắc nghiệm</MenuItem>

                </Select>


            </div>
            {checkTypeQuestion()}

            <Button style={{ marginTop: '30px' }} onClick={handleAddNewQuestion} >
                Add
            </Button>


        </div >


    )

}

export default FormQuestion;


