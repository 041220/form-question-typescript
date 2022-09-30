import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import containerSlice from "../Container/containerSlice";
import './index.css'


const Title = () => {

    const [inputTitle, setInputTitle] = useState("")
    const [description, setDescription] = useState("")

    const getData = useSelector(state => state.questionList)
    console.log("checkGetData", getData.questionList);
    const dispatch = useDispatch();

    useEffect(() => {
        setInputTitle(getData.title)
        setDescription(getData.description)
    }, [getData])


    const handleInputTitle = (e) => {

        setInputTitle(e.target.value)

        dispatch(containerSlice.actions.titleQuestion({ title: e.target.value, description: description }))
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)

        dispatch(containerSlice.actions.titleQuestion({ title: inputTitle, description: e.target.value }))
    }

    return (
        <>
            <div className="title">

                <Input style={{ display: 'flex', fontSize: '150%' }} placeholder="Nhập tiêu đề" value={inputTitle} onChange={handleInputTitle} />
                <Input style={{ display: 'flex' }} placeholder="Mô tả tiêu đề" value={description} onChange={handleDescription} />

            </div>
        </>
    )
}

export default Title;