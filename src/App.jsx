import './App.css';

import { Route, Routes } from 'react-router-dom';

import Aboutus from './Pages/AboutUs';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<HomePage/>} />  
    <Route path='/about' element={<Aboutus/>} />  

    <Route path='*' element={<NotFound/>} />  
   </Routes>
    </>
  )
}

export default App
