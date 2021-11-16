import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import studentsData from './studentsData';
import './Student.css';

const StudentList = () => {
  let navigate = useNavigate();
  return(
    <div>
    <h1>Students Details</h1>
    <button className="addStudentBtn" onClick={()=>{navigate("/students-desc")}}>Add new student</button>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
    <TableRow>
    <TableCell>Name</TableCell>
    <TableCell align="right">Age</TableCell>
    <TableCell align="right">Course</TableCell>
    <TableCell align="right">Batch</TableCell>
    <TableCell align="right">Change</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {studentsData.map((row) => (
      <TableRow
      key={row.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
      <TableCell component="th" scope="row">{row.name}</TableCell>
      <TableCell align="right">{row.age}</TableCell>
      <TableCell align="right">{row.course}</TableCell>
      <TableCell align="right">{row.batch}</TableCell>
      <TableCell align="right"><Link to={`/students/${row.id}`}>Edit</Link></TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </TableContainer>
      </div>
      )
    }
    
    export default StudentList