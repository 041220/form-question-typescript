import { Grid, Input } from "@mui/material";
import React, { useState } from "react";
import './index.css'

const ariaLabel = { 'aria-label': 'description' };

const Title = () => {

    const [inputTitle, setInputTitle] = useState("Tiêu đề biểu mẫu")
    const [descriptionTitle, setDescriptionTitle] = useState("Mô tả tiêu đề")

    const handleInputTitle = (e) => {
        setInputTitle(e.target.value)
    }
    const handleDescriptionTitle = (e) => {
        setDescriptionTitle(e.target.value)
    }

    return (
        <>
            <div className="title">
                <Grid >
                    <Input style={{ display: 'flex', fontSize: '150%' }} placeholder={inputTitle} onChange={handleInputTitle} inputProps={ariaLabel} />
                    <Input style={{ display: 'flex' }} placeholder={descriptionTitle} onChange={handleDescriptionTitle} inputProps={ariaLabel} />
                </Grid>
            </div>
        </>
    )
}

export default Title;