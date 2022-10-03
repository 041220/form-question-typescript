import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import homeSlice from "./homeSlice";
import './index.css'

const Home = () => {

    const list = useSelector(state => state.formList.list)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    console.log("list:", list);

    useEffect(() => {
        const getDataForm = localStorage.getItem("formList")
        if (getDataForm) {
            dispatch(homeSlice.actions.getDataFormLocal(JSON.parse(getDataForm)))
        }
    }, [dispatch])

    const handleAddNewForm = () => {
        navigate('/create')
    }
    const handleViewOneForm = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDeleteForm = (id) => {
        dispatch(homeSlice.actions.deleteForm(id))
    }

    return (
        <>
            <Button onClick={handleAddNewForm}>Add Form</Button>

            {
                list?.map(form => {
                    return (
                        <>
                            <Card className="form-list" >
                                <CardContent>
                                    <Typography sx={{ fontSize: 20 }}>
                                        {form.questionList.title}
                                    </Typography>

                                    <CardActions >
                                        <Button size="small" onClick={() => handleViewOneForm(form.id)}> View Form</Button>

                                        <Button onClick={() => handleDeleteForm(form.id)}> Delete Form </Button>
                                    </CardActions>

                                </CardContent>
                            </Card>
                        </>
                    )
                })
            }

        </>
    )
}

export default Home;