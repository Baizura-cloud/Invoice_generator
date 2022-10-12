import * as React from 'react';
import { useForm, Controller } from "react-hook-form";
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
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import TableForm from './table';
import TotalItem from './total';
import UploadLogo from './uploadLogo';

const generatePDF = () => {
    const input = document.getElementById('export');
    console.log("generating")
    html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new JsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
        })
}

export default function InvoiceForm() {

    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };


    return (
        <Box sx={{ minWidth: 275, flexGrow: 1, mt: 10, mb: 10, maxWidth: 800 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 100,
                        height: 50,
                    },
                }}
            >
                <Button variant="contained" sx={{backgroundColor: "#6fd5f1", color: "#000000"}} onClick={generatePDF}  >Export</Button>
            </Box>

            <Card variant="outlined" >
                <CardContent id="export" sx={{ margin: 5 }}>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <Stack direction="column" justifyContent="space-between" spacing={6}>
                            <Grid item xs={12} >
                                <Stack direction="row" justifyContent="space-between" spacing={2}>
                                    <Controller
                                        render={({ field }) => <TextField size="small"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">ID:</InputAdornment>,
                                            }}
                                            {...field} />}
                                        name="invoice_id"
                                        control={control}
                                        defaultValue=""
                                        className="materialUIInput"
                                    />
                                    {/* <Button variant="outlined" type="submit" >Submit</Button> */}
                                    <UploadLogo />
                                </Stack>
                            </Grid>

                            <Stack direction="row" justifyContent="space-between" spacing={2}>
                                <Grid item xs={6} >
                                    <Typography variant="subtitle1" component="h2">
                                        From:
                                    </Typography>
                                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                                        <Controller
                                            render={({ field }) => <TextField fullWidth size="small"
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start">Name:</InputAdornment>,
                                                }} {...field} />}
                                            name="company_name"
                                            control={control}
                                            defaultValue=""
                                            className="materialUIInput"
                                        />
                                        <Controller
                                            render={({ field }) => <TextField fullWidth size="small" InputProps={{
                                                startAdornment: <InputAdornment position="start">Address:</InputAdornment>,
                                            }} multiline  {...field} />}
                                            name="company_address"
                                            control={control}
                                            defaultValue=""
                                            className="materialUIInput"
                                        />

                                        <Controller
                                            render={({ field }) => <TextField fullWidth size="small" InputProps={{
                                                startAdornment: <InputAdornment position="start">State/Code:</InputAdornment>,
                                            }} multiline  {...field} />}
                                            name="company_state"
                                            control={control}
                                            defaultValue=""
                                            className="materialUIInput"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} >
                                    <Typography variant="subtitle1" component="h2">
                                        To:
                                    </Typography>
                                    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                                        <Controller
                                            render={({ field }) => <TextField size="small" fullWidth InputProps={{
                                                startAdornment: <InputAdornment position="start">Name:</InputAdornment>,
                                            }}  {...field} />}
                                            name="company_name2"
                                            control={control}
                                            defaultValue=""
                                            className="materialUIInput"
                                        />
                                        <Controller
                                            render={({ field }) => <TextField type="date" fullWidth size="small" InputProps={{
                                                startAdornment: <InputAdornment position="start">Date:</InputAdornment>,
                                            }}  {...field} />}
                                            name="date"
                                            control={control}
                                            defaultValue=""
                                            className="materialUIInput"
                                        />
                                        <Controller
                                            render={({ field }) => <TextField type="date" fullWidth size="small" InputProps={{
                                                startAdornment: <InputAdornment position="start">Due Date:</InputAdornment>,
                                            }}  {...field} />}
                                            name="due_date"
                                            control={control}
                                            defaultValue=""
                                            className="materialUIInput"
                                        />
                                    </Stack>
                                </Grid>
                            </Stack>

                            <Grid item xs={12} >
                                <TableForm />
                            </Grid>

                            <Stack direction="row" justifyContent="space-between" spacing={2}>
                                {/* <TotalItem /> */}
                            </Stack>
                            <Grid item xs={12} >
                                <Controller
                                    render={({ field }) => <TextField size="small"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Note:</InputAdornment>,
                                        }}
                                        multiline fullWidth  {...field} />}
                                    name="note"
                                    control={control}
                                    defaultValue=""
                                    className="materialUIInput"
                                />
                            </Grid>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
}