import './App.css';

import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Aboutus from './Pages/AboutUs';


function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<HomePage/>} />  
    <Route path='/about' element={<Aboutus/>} />  
   </Routes>
    </>
  )
}

export default App
