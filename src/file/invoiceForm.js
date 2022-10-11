import * as React from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import TableForm from './table';
import TotalItem from './total';
import UploadLogo from './uploadLogo';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function InvoiceForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <Container>
            <Box sx={{ minWidth: 275, flexGrow: 1, margin: 3, maxWidth: 1000 }}>
                <Card variant="outlined">
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack direction="column" justifyContent="space-between" spacing={6}>

                                <Grid item xs={12} >
                                    <Stack direction="row" justifyContent="space-between" spacing={2}>
                                        <TextField id="invoice_id" label="Invoice Id" variant="outlined" {...register("example")} />
                                        <UploadLogo/>
                                    </Stack>
                                </Grid>

                                <Stack direction="row" justifyContent="space-between" spacing={2}>
                                    <Grid item xs={6} >
                                        <Typography variant="subtitle1" component="h2">
                                            From:
                                        </Typography>
                                        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                                            <TextField id="company_name" label="Company Name" variant="outlined" {...register("example")} />
                                            <TextField id="company_address" label="Company Address" multiline rows={4}/>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <Typography variant="subtitle1" component="h2">
                                            To:
                                        </Typography>
                                        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                                            <TextField id="company_name" label="Company Name" variant="outlined" {...register("example")} />
                                            <TextField id="date" label="Date" variant="outlined" {...register("example")} />
                                        </Stack>
                                    </Grid>
                                </Stack>

                                <Grid item xs={12} >
                                        <TableForm/>
                                </Grid>

                                <Stack direction="row" justifyContent="space-between" spacing={2}>
                                   <TotalItem/>
                                </Stack>

                                <Stack direction="row" justifyContent="space-between" spacing={2}>
                                    <Grid item xs={6} >
                                        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                                            <TextField id="payment" label="Payment" variant="outlined" {...register("example")} />
                                            <TextField id="note" label="Note" variant="outlined" {...register("example")} />
                                        </Stack>
                                    </Grid>
                                </Stack>

                            </Stack>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Container>

    );
}