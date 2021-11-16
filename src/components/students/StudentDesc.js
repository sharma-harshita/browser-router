import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from "react-router-dom";
import studentsData from './studentsData';


const StudentDesc = () => {
  let { id } = useParams();
  const [state, setState] = useState([]);
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [course, setCourse] = useState("");
  // const [batch, setBatch] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  let navigate = useNavigate();
  
  function handleClick() {
    navigate("/students")
  }
  
  useEffect(()=>{
    const student = studentsData.find(value => value.id === parseInt(id));
    if (student==undefined) {
      setState({"id": "", "name":"", "age":"", "batch":"", "course":""})
    }else{
      setState(student);
      setIsStudent(true);
    }
  },[])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState( prevState => ({
      ...prevState,
      [name] : value
    }))
  };
  
  const handleUpdate = () =>{
    const index = studentsData.findIndex(value=>value.id===state.id);
    studentsData[index]=state;
    navigate("/students")
  }
  
  const handleSubmit = () => {
    const len = studentsData.length;
    console.log(len, state);
    setState( prevState => ({
      ...prevState,
      "id" : len
    }))
    console.log(state);
    studentsData.push(state);
    navigate("/students")
  }

  return (
    <div>
    <div className="formDiv">
    <TextField
    id="outlined"
    label="Name"
    name="name"
    value={state.name}
    onChange={(event)=>handleChange(event)}
    style={{margin:"50px", width:"400px"}}
    />
    <TextField  
    id="outlined"
    label="Age"
    name="age"
    value={state.age}
    onChange={handleChange}
    style={{margin:"50px", width:"400px"}}
    
    />
    <br/>
    <br/>
    <TextField
    id="outlined"
    label="Course"
    name="course"
    value={state.course}
    onChange={handleChange}
    style={{margin:"50px", width:"400px"}}
    
    />
    <TextField
    id="outlined"
    label="Batch"
    name="batch"
    value={state.batch}
    onChange={handleChange}
    style={{margin:"50px", width:"400px"}}
    />
    <br/>
    <br/>
    </div>
    {isStudent
      ? 
      <div>
      <button className="submitStudentBtn" onClick={handleUpdate}>Update</button>
      <button className="cancelStudentBtn" onClick={handleClick}>Cancel</button>
      </div> 
      : 
      <div>
      <button className="submitStudentBtn" onClick={handleSubmit}>Submit</button>
      <button className="cancelStudentBtn" onClick={handleClick}>Cancel</button>
      </div>}
      </div>
      );
    }
    
    export default StudentDesc;
    