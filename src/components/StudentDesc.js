import React from 'react'
import {useParams, useNavigate} from "react-router-dom";


function StudentDesc() {
  let { id } = useParams();
  let navigate = useNavigate();

  function handleClick() {
    navigate("/students")
  }
  
  return (
    <div>
    <h3>Student: {id}</h3>
    <button onClick={handleClick}>Go Back</button>
    </div>
  );
}
  
  export default StudentDesc;
  