import { Button, FormControlLabel, Input, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import './index.css'



const Question = ({ question }) => {
    const [questionName, setQuestionName] = useState('');
    const [typeQuestion, setTypeQuestion] = useState('1');
    console.log("check question", question);
    useEffect(() => {
        setQuestionName(question.name)
        setTypeQuestion(question.type)
    })

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
                    <Input placeholder='Nhập đoạn' value={question.description} />
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

        </div >


    )

}

export default Question;


