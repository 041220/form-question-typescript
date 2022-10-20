import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import '../FormInProgress/index.css'
import './index.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ViewAnswers: React.FC = () => {

    const navigate = useNavigate();
    const dataFormList = useSelector((state: any) => state.formList.list); //Lấy data của các form ở store

    console.log("dataFormList", dataFormList);


    const param = useParams();
    console.log("param:", param); //truy xuất param trên url
    //Lấy ra data của form cần view
    const dataForm = useMemo(() => {
        return (
            dataFormList.find((form: { id: string }) => form?.id === param?.FormId)
        )
    }, [param, dataFormList])

    const handleBackHome = () => {
        navigate('/')
    }
    return (
        <div>
            {/* <Title formDescription={dataForm?.description} formTitle={dataForm?.title} /> */}
            <div className="title-view-answer">
                <div style={{ fontSize: '150%', fontWeight: '700', marginBottom: '10px' }}>
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
            {//map question and answers
                dataForm?.questions?.map((question: any, index: number) => {
                    console.log("checked", dataForm?.answers);
                    return (
                        <div className="view-answer">
                            <div style={{ marginBottom: '15px' }}>
                                Question {index + 1}: {question?.name}
                            </div>
                            <div>
                                Answer: {dataForm?.answers?.find((item: { id: string }) => item?.id === question?.id)?.answer}
                            </div>

                        </div>

                    )
                })
            }
            {/* <div style={{ width: "100%", height: "40px", bot: "0" }}></div> */}
        </div>
    )

}

export default ViewAnswers;