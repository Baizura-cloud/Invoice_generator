import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AdditionalInformation() {
  return (
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
  );
}
