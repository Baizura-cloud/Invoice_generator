import * as React from 'react';
import { useForm } from "react-hook-form";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';



export default function TotalItem() {
    const { register, watch, formState: { errors } } = useForm();

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <>
            <Grid item xs={6} >
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                    <TextField id="tax_rate" label="Tax Rate" variant="outlined" {...register("example")} />
                    <TextField id="service_charge_rate" label="Service Charge Rate" variant="outlined" {...register("example")} />
                </Stack>
            </Grid>
            <Grid item xs={6} >
                <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                    <TextField id="subtotal" label="Subtotal" variant="outlined" {...register("example")} />
                    <TextField id="tax" label="Tax" variant="outlined" {...register("example")} />
                    <TextField id="service_charge" label="Service Charge" variant="outlined" {...register("example")} />
                    <TextField id="total" label="Total" variant="outlined" {...register("example")} />
                </Stack>
            </Grid>
        </>

    );


}


