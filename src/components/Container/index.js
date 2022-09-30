import { Button, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormQuestion from "../FormQuestion";
import Question from "../Questions";
import Title from "../Title";
import containerSlice from "./containerSlice";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Container = () => {

    const [editId, setEditId] = useState(undefined);
    const [open, setOpen] = useState(false);

    const questionList = useSelector(state => state.questionList);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("log 1");
    //     setTimeout(() => {
    //         localStorage.setItem("questionList", JSON.stringify(questionList))
    //     }, 100)
    // }, [questionList])

    useEffect(() => {
        console.log("log 2");
        const getDataLocal = localStorage.getItem("questionList");
        if (getDataLocal) {
            dispatch(containerSlice.actions.getDataLocal(JSON.parse(getDataLocal)))
        }
    }, [dispatch])

    console.log("editId :", editId);

    const handleOpenForm = () => setOpen(true);
    const handleCloseForm = () => setOpen(false);

    return (
        <>

            <Title />
            <Button
                onClick={handleOpenForm}
                style={{
                    marginLeft: '81%',
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    boxShadow: '0 0 5px 1px #bfbfbf',
                }}>
                <AddCircleOutlineIcon color="action" />
            </Button>
            <Modal
                open={open}
                onClose={handleCloseForm}
            >
                <FormQuestion />
            </Modal>
            {
                questionList.questions.map(question => {
                    return (

                        <>

                            {
                                editId === question.id
                                    ? <FormQuestion editId={editId} setEditId={setEditId} question={question} />
                                    : <Question key={question.id} question={question} setEditId={setEditId} />

                            }

                        </>



                    )
                })
            }

        </>
    )

}

export default Container;