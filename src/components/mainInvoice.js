import * as React from 'react';
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
                        <SampleTable/>
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
