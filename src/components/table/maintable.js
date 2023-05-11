import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MainTable() {

  const [tablerow, setTableRow] = useState([])

  function addRow (){
    const data = {
      Item: "",
      Quantity: "",
      Price: "",
      Total:"",
    };
    setTableRow([...tablerow, data]);

  }
  
  function removeTableRow() {
    return(
      <>
      </>
    )
  }
  
function SingleTableCell() {
  return (
    <>
      <TableCell component="th" scope="row">
        <IconButton color="secondary">
          <DeleteIcon />
        </IconButton>
      </TableCell>
      <TableCell align="right"><TextField variant="standard" /></TableCell>
      <TableCell align="right"><TextField variant="standard" /></TableCell>
      <TableCell align="right"><TextField variant="standard" /></TableCell>
      <TableCell align="right"><TextField variant="standard" /></TableCell>
    </>
  )
}


  function TableItem() {
    return (
      <TableBody>
        <TableRow
        rows={tablerow}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <SingleTableCell/>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <IconButton color="primary" onClick={addRow}>
                <AddCircleIcon  />
              </IconButton>
            </TableCell>
            <TableCell>Item</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price per unit</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableItem />
      </Table>
    </TableContainer>
  );
}
