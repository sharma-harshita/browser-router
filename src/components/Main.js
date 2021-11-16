import React, { useContext } from 'react';
import {Routes, Route} from "react-router-dom";
import ContactUs from './contact-us/ContactUs';
import Home from './home/Home';
import Students from './students/Students';
import StudentDesc from './students/StudentDesc';
import "./Main.css";

const Main = () => (
  <div className="mainContent">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/students' element={<Students/>}/>
      <Route path='/students/:id' element={<StudentDesc/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/students-desc' element={<StudentDesc/>}/>
    </Routes>
  </div>
)

export default Main

