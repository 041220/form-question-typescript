
import './App.css';
import Container from './components/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContainerEdit from './components/EditContainer';
import DoTheTopic from './components/FormInProgress';
import ViewAnswers from './components/ViewAnswers';
import React, { useEffect } from 'react';
import homeSlice from './components/Home/homeSlice';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getDataForm = localStorage.getItem("formList") //Lấy data các form từ Local Storage 
    if (getDataForm) {
      dispatch(homeSlice.actions.getDataFormLocal(JSON.parse(getDataForm))) //dispatch data vừa lấy từ local vào store
    }
    console.log("getDataForm:", getDataForm);
  }, [dispatch])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:FormId' element={<ContainerEdit />} />
          <Route path='/create' element={<Container />} />
          <Route path='/formInProgress/:FormId' element={< DoTheTopic />} />
          <Route path='/answers/:FormId' element={<ViewAnswers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
