import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableItem from './tableitem';


export default function MainTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price per unit</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
       <TableItem/>
      </Table>
    </TableContainer>
  );
}
