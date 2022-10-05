import { Button, Modal } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormQuestion from "../FormQuestion";
import Question from "../Questions";
import Title from "../Title";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import homeSlice from "../Home/homeSlice";
import { useNavigate, useParams } from "react-router-dom";
import containerSlice from "../Container/containerSlice";
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const ContainerEdit = () => {

    const [editId, setEditId] = useState(undefined);
    const [open, setOpen] = useState(false);

    const questionList = useSelector(state => state.questionList); //Lấy data của 1 form đã lưu ở store 
    const dataFormList = useSelector(state => state.formList.list); //Lấy data của các form ở store
    console.log("questionList:", questionList);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const param = useParams();
    console.log("param:", param);
    //Lấy ra data của form cần view
    const dataForm = useMemo(() => {
        return (
            dataFormList.find((form) => form?.id === param.FormId)
        )
    }, [param, dataFormList])

    //dispatch dữ liệu vào 
    useEffect(() => {
        dispatch(containerSlice.actions.getData(dataForm))
    }, [dispatch, dataForm])

    console.log('dataForm', dataForm);

    // console.log("editId :", editId);

    const handleOpenForm = () => setOpen(true);

    const handleCloseForm = () => setOpen(false);

    //dispatch data 1 form đang edit
    const handleSaveForm = () => {
        dispatch(homeSlice.actions.editForm({
            id: dataForm?.id, data: { ...questionList }
        }))

        navigate("/")
    }
    return (
        <div>
            <Title formDescription={dataForm?.description} formTitle={dataForm?.title} />
            <div style={{ marginRight: '1000px', position: 'sticky', top: 3 }}>
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
                <FormQuestion />
            </Modal>


            {//map questions của 1 form đang edit ra
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

        </div>
    )

}

export default ContainerEdit;