import { Button, Input, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import containerSlice from "../Container/containerSlice";
import './index.css'
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

const FormQuestion = ({ editId, setEditId, question }) => {
    const [questionName, setQuestionName] = useState('');
    const [options, setOptions] = useState([]);
    const [typeQuestion, setTypeQuestion] = useState('1')

    const dispatch = useDispatch();
    console.log("checkLOG:", question);

    useEffect(() => {
        setQuestionName(question?.name || '')
        setTypeQuestion(question?.type || '1')
        setOptions(question?.options || [])
    }, [question])

    const handleAddNewQuestion = () => {
        dispatch(
            containerSlice.actions.addNewQuestion({
                id: v4(),
                name: questionName,
                type: typeQuestion,
                ...(typeQuestion === '2' && { options })

            }))
        setQuestionName('');
        setOptions([]);
    }
    const handleEditQuestion = () => {
        dispatch(
            containerSlice.actions.editQuestion({
                id: editId, data: { id: editId, name: questionName, type: typeQuestion, options }
            }))
        setEditId(undefined)
    }

    const handleQuestionName = (e) => {
        setQuestionName(e.target.value)
        console.log("questionname: ", e.target.value);
    }
    const handleChangeTypeQuestion = (e) => {
        setTypeQuestion(e.target.value)
        console.log("type:", e.target.value);
    }

    const handleAddOption = () => {
        setOptions([...options, { key: v4(), name: '' }])

    }
    const handleDeleteOption = (key) => {
        setOptions(options.filter(option => (option.key !== key)))
    }
    const handleChangeOption = (key, event) => {
        setOptions(options.map(option => (option.key === key
            ? { ...option, name: event.target.value }
            : { ...option }
        )))
    }
    console.log("option", options);
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
                    <RadioGroup >

                        {
                            options.map(option => (
                                <div key={option.key}>
                                    <Radio checked={false} /> <Input value={option.name} onChange={(event) => handleChangeOption(option.key, event)} />
                                    <Button onClick={() => handleDeleteOption(option.key)}><ClearIcon color="action" /></Button>
                                </div>
                            ))
                        }

                    </RadioGroup>
                    <Button onClick={handleAddOption}><AddIcon />Option</Button>
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


            <Button style={{ marginTop: '30px' }} onClick={editId ? handleEditQuestion : handleAddNewQuestion} >
                {editId ? 'Update' : 'Add'}
            </Button>


        </div >


    )

}

export default FormQuestion;


