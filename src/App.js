
import './App.css';
import Container from './components/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import ContainerEdit from './components/EditContainer';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit/:FormId' element={<ContainerEdit />} />
          <Route path='/create' element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
