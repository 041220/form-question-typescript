
import './App.css';
import Container from './components/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import { useSelector } from 'react-redux';

function App() {

  const Data = useSelector(state => state.formList)
  console.log("Data", Data.list);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:FormId' element={<Container />} />
          <Route path='/create' element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
