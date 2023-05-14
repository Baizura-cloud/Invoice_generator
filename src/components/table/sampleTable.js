import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';

function TableRows({ rows, onClickRemove, onChangeval }) {
    return rows.map((rowsData, index) => {
        const {Item, Quantity, Price, Total } = rowsData;
        return (
            <TableRow key={index}>
                <TableCell>
                    <IconButton onClick={() => onClickRemove(index)} color="secondary">
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
                <TableCell>
                    <TextField variant="standard"
                        type="text"
                        value={Item}
                        onChange={(event) => onChangeval(index, event)}
                        name="Item"
                        className="form-control"
                    />
                </TableCell>
                <TableCell>
                    <TextField variant="standard"
                        type="text"
                        value={Quantity}
                        onChange={(event) => onChangeval(index, event)}
                        name="Quantity"
                        className="form-control"
                    />
                </TableCell>
                <TableCell>
                    <TextField variant="standard"
                        type="text"
                        value={Price}
                        onChange={(event) => onChangeval(index, event)}
                        name="Price"
                        className="form-control"
                    />
                </TableCell>
                <TableCell>
                    <TextField variant="standard"
                        type="text"
                        value={Total}
                        onChange={(event) => onChangeval(index, event)}
                        name="Total"
                        className="form-control"
                    />
                </TableCell>
                
            </TableRow>
        );
    });
}


function SampleTable({rows ,onChangeval, onClickAdd, onClickRemove}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <IconButton color="primary" onClick={onClickAdd}>
                                <AddCircleIcon />
                            </IconButton>
                        </TableCell>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price per unit</TableCell>
                        <TableCell align="right">Total</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRows
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        rows={rows}
                        onClickRemove={onClickRemove}
                        onChangeval={onChangeval}
                    />
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default SampleTable;