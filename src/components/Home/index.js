import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import homeSlice from "./homeSlice";
import './index.css'
import AddCardIcon from '@mui/icons-material/AddCard';
import DeleteIcon from '@mui/icons-material/Delete';
import containerSlice from "../Container/containerSlice";

const Home = () => {

    const list = useSelector(state => state.formList.list) //Lấy data của các form trong store ra

    const dispatch = useDispatch();

    const navigate = useNavigate();

    console.log("list:", list);

    useEffect(() => {
        const getDataForm = localStorage.getItem("formList") //Lấy data các form từ Local Storage 
        if (getDataForm) {
            dispatch(homeSlice.actions.getDataFormLocal(JSON.parse(getDataForm))) //dispatch data vừa lấy từ local vào store
        }
    }, [dispatch])

    //Tạo mới 1 form
    const handleAddNewForm = () => {
        navigate('/create')
        dispatch(containerSlice.actions.resetForm()) //sau khi click vào btn Add Form thì reset lại form
    }
    //View 1 form
    const handleViewOneForm = (id) => {
        navigate(`/edit/${id}`)
    }
    //Delete 1 form
    const handleDeleteForm = (id) => {
        dispatch(homeSlice.actions.deleteForm(id))
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
                list?.map(form => {
                    return (

                        <Card className="form-list" key={form.id}>
                            <CardContent>
                                <Typography style={{ marginBottom: '10px' }} sx={{ fontSize: 23 }}>
                                    {form.title}
                                </Typography>
                                <Typography sx={{ fontSize: 17 }}>
                                    {form.description}
                                </Typography>

                                <CardActions >
                                    <Button onClick={() => handleViewOneForm(form.id)}> View Form </Button>

                                    <Button style={{ marginLeft: '70%' }} onClick={() => handleDeleteForm(form.id)}> <DeleteIcon color="action" /> </Button>
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