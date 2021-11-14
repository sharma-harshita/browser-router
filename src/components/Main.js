import React from 'react';
import {Routes, Route} from "react-router-dom";
import ContactUs from './ContactUs';
import Home from './Home';
import Students from './Students';
import StudentDesc from './StudentDesc';
import "./Main.css";

const Main = () => (
  <div className="mainContent">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/students' element={<Students/>}/>
      <Route path='/students/:id' element={<StudentDesc/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
  </div>
)

export default Main
