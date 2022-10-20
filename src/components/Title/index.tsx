
import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import containerSlice from "../Container/containerSlice";
import './index.css'
import { TitleProps } from "./type";


const Title: React.FC<TitleProps> = ({ formDescription, formTitle }) => {

    const [inputTitle, setInputTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const dispatch = useDispatch();

    useEffect(() => {
        setInputTitle(formTitle)
        setDescription(formDescription)
    }, [formDescription, formTitle])


    const handleInputTitle = (e: any) => {

        setInputTitle(e.target.value)

        dispatch(containerSlice.actions.titleQuestion({ title: e.target.value, description: description }))
    }
    const handleDescription = (e: any) => {
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