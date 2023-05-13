import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ModalPreview from './preview/modalPreview';
import MainTable from './table/maintable';
import SampleTable from './table/sampleTable';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

export default function MainInvoice() {
    const [rows, setRow] = useState([]);
    const addRowTable = () => {
        const data = {
            Item: "",
            Quantity: "",
            Price: "",
            Total: "",
        };
        setRow([...rows, data]);
    };
    const tableRowRemove = (index) => {
        const dataRow = [...rows];
        dataRow.splice(index, 1);
        setRow(dataRow);
    };
    const onValUpdate = (i, event) => {
        const { name, value } = event.target;
        const data = [...rows];
        data[i][name] = value;
        setRow(data);
    };

    return (
        <Card sx={{ minWidth: 800, minHeight: 800 }}>
            <CardContent>
                <Box sx={{ width: '100%' }}>
                    <Stack spacing={2}>
                        <Grid container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            >
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={6}
                                label='Billed To:'
                                sx={{ minWidth: 300 }}
                            />
                            <Stack direction="column" spacing={2}>
                                <TextField id="outlined-basic" label="Invoice No" variant="outlined" />
                                <TextField id="filled-basic" variant="outlined" type='date' />
                            </Stack>
                        </Grid>
                        <SampleTable rows={rows} onChangeval={onValUpdate} onClickAdd={addRowTable} onClickRemove={tableRowRemove} />
                        {/* <MainTable /> */}
                        <Grid container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 0, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"

                            >
                                <TextField
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={4}
                                    label='Additional Information'
                                />
                            </Box>
                            <ModalPreview />
                        </Grid>

                    </Stack>
                </Box>
            </CardContent>
        </Card>
    );
}
