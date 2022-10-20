import React from "react"
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import homeSlice from "./homeSlice";
import './index.css'
import AddCardIcon from '@mui/icons-material/AddCard';
import DeleteIcon from '@mui/icons-material/Delete';
import containerSlice from "../Container/containerSlice";


const Home: React.FC = () => {

    const list = useSelector((state: any) => state.formList.list) //Lấy data của các form trong store ra

    const dispatch = useDispatch();

    const navigate = useNavigate();

    console.log("list:", list);


    //Tạo mới 1 form
    const handleAddNewForm = () => {
        navigate('/create')
        dispatch(containerSlice.actions.resetForm()) //sau khi click vào btn Add Form thì reset lại form
    }
    //View 1 form
    const handleViewOneForm = (id: string) => {
        navigate(`/edit/${id}`)
    }
    //Làm bài trong 1 form
    const handleDoTheTopic = (id: string) => {
        navigate(`/formInProgress/${id}`)
    }
    //Delete 1 form
    const handleDeleteForm = (id: string) => {
        dispatch(homeSlice.actions.deleteForm(id))
    }
    const handleViewAnswers = (id: string) => {
        navigate(`/answers/${id}`)
    }

    return (
        <>
            <h1>List Form Question</h1>
            <div style={{ marginRight: '1000px', position: 'sticky', top: 3 }}>
                <Button
                    onClick={handleAddNewForm}
                    style={{
                        marginLeft: '70%',
                        backgroundColor: 'white',
                        boxShadow: '0 0 5px 1px #bfbfbf',
                    }}
                >
                    < AddCardIcon color="action" />
                </Button>
            </div>

            {
                list?.map((form: any) => {
                    return (

                        <Card style={{ paddingLeft: '40px', paddingBottom: '-20px' }} className="form-list" key={form.id}>
                            <CardContent>
                                <Typography style={{ marginBottom: '10px' }} sx={{ fontSize: 23 }}>
                                    {form.title}
                                </Typography>
                                <Typography sx={{ fontSize: 17 }}>
                                    {form.description}
                                </Typography>

                                <CardActions >
                                    <Button onClick={() => handleViewOneForm(form.id)}> View Form </Button>
                                    <Button onClick={() => handleDoTheTopic(form.id)}>Do The Topic</Button>
                                    <Button onClick={() => handleViewAnswers(form.id)}> View Answers</Button>
                                    <Button style={{ marginLeft: '40%' }} onClick={() => handleDeleteForm(form.id)}> <DeleteIcon color="action" /> </Button>
                                </CardActions>

                            </CardContent>
                        </Card>

                    )
                })
            }

        </>
    )
}

export default Home;