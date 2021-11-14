import React from 'react'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const students = [
  {id: 1, name : "John", age: 24, course: "MERN", batch: "October"},
  {id: 2, name : "Doe", age: 25, course: "MERN", batch: "November"},
  {id: 3, name : "Biden", age: 26, course: "MERN", batch: "September"},
  {id: 4, name : "Barar", age: 22, course: "MERN", batch: "September"},
  {id: 5, name : "Christ", age: 23, course: "MERN", batch: "October"},
  {id: 6, name : "Elent", age: 24, course: "MERN", batch: "November"},
]


const StudentList = () => {
  return(
    <div>
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
    {students.map((row) => (
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