import { Button } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import homeSlice from "../Home/homeSlice";
import { useNavigate, useParams } from "react-router-dom";
import './index.css'
import QuestionsInProgress from "../QuestionsInProgress";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FormInProgress = () => {

    const [listAnswer, setListAnswer] = useState([])

    const questionList = useSelector(state => state.questionList); //Lấy data của 1 form đã lưu ở store 
    const dataFormList = useSelector(state => state.formList.list); //Lấy data của các form ở store
    console.log("dataFormList", dataFormList);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const param = useParams();
    console.log("param:", param); //truy xuất param trên url
    //Lấy ra data của form cần view
    const dataForm = useMemo(() => {
        return (
            dataFormList.find((form) => form?.id === param?.FormId)
        )
    }, [param, dataFormList])

    console.log('dataForm', dataForm);

    useEffect(() => {
        setListAnswer(questionList?.questions?.map((item) => {
            return (
                { id: item.id }
            )
        }

        ))
    }, [questionList])

    //dispatch data 1 form đang edit
    const handleSubmitForm = () => {
        dispatch(homeSlice.actions.submitForm({
            id: dataForm?.id, data: { answers: listAnswer }
        }))

        navigate("/")
    }
    const handleBackHome = () => {
        navigate('/')
    }
    console.log("listAnswer", listAnswer);
    return (
        <div>
            {/* <Title formDescription={dataForm?.description} formTitle={dataForm?.title} /> */}
            <div className="title-do-the-topic">
                <div style={{ fontSize: '150%', marginBottom: '10px' }}>
                    {dataForm?.title}
                </div>
                <div>
                    {dataForm?.description}
                </div>
            </div>
            <div style={{ marginRight: '1000px', position: 'sticky', top: 0 }}>
                <div style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 0 10px 1px #bfbfbf', width: '64px', marginLeft: '55%' }}>
                    <Button onClick={handleBackHome}>
                        <ArrowBackIcon color="action" />
                    </Button>

                </div>
            </div>
            {//map questions của 1 form đang edit ra
                questionList?.questions?.map((question, index) => {

                    return (
                        <>

                            {
                                <QuestionsInProgress index={index} listAnswer={listAnswer} setListAnswer={setListAnswer} key={question?.id} question={question} />
                            }
                        </>

                    )
                })
            }
            <div style={{ textAlign: 'center' }}>
                <Button
                    style={{ margin: '0 auto', marginBottom: '30px', marginTop: '30px' }}
                    onClick={handleSubmitForm}
                >
                    Submit
                </Button>
            </div>
        </div>
    )

}

export default FormInProgress;