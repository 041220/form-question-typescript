import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormQuestion from "../FormQuestion";
import Question from "../Questions";
import Title from "../Title";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import homeSlice from "../Home/homeSlice";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Questions } from "../type";



const Container: React.FC = () => { //Component tạo 1 form mới

    const [editId, setEditId] = useState<any>(undefined);
    const [open, setOpen] = useState<boolean>(false);

    const questionList = useSelector((state: any) => state.questionList); //Lấy data question hiện thời trong store
    console.log("questionList", questionList);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    console.log("editId :", editId);

    const handleOpenForm = () => setOpen(true); //mở modal add question

    const handleCloseForm = () => setOpen(false); //đóng modal add question

    //dispatch dữ liệu của 1 form mới
    const handleSaveForm = () => {
        dispatch(homeSlice.actions.addNewForm({
            id: v4(),
            ...questionList,
        }))
        navigate("/")
    }

    return (
        <div>
            <Title formDescription={""} formTitle={""} />
            <div style={{ marginRight: '1000px', position: 'sticky', top: 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '0 0 10px 1px #bfbfbf', width: '64px', marginLeft: '55%' }}>
                    <Button
                        onClick={handleOpenForm}
                        style={{ backgroundColor: 'white' }}>
                        <AddCircleOutlineIcon color="action" />
                    </Button>
                    <Button
                        style={{ backgroundColor: 'white' }}
                        onClick={handleSaveForm}
                    >
                        <SaveAltIcon color="action" />
                    </Button>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleCloseForm}
            >
                <FormQuestion editId={undefined} setEditId={function (value: string | undefined): void {
                    throw new Error("Function not implemented.");
                }} question={undefined} />
            </Modal>
            {
                (questionList.questions as Questions[]).map((question, index: number) => {
                    return (
                        <>
                            {
                                editId === question.id
                                    ? <FormQuestion editId={editId} setEditId={setEditId} question={question} />
                                    : <Question index={index} key={question.id} question={question} setEditId={setEditId} />

                            }
                        </>

                    )
                })
            }

        </div>
    )

}

export default Container;