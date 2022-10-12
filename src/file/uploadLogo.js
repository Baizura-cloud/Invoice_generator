import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function UploadLogo() {
    const [logo, setLogo] = React.useState();
    const [is, setIs] = React.useState(false);
    function handleChange(e) {
        console.log(e.target.files);
        setIs(true)
        setLogo(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 150,
                    height: 200,
                },
            }}
        >
            {is ? <img src={logo}/> : 
            
            (<> <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                onChange={handleChange}
                type="file"
            />
                <label htmlFor="raised-button-file">
                    <Button variant="contained"  sx={{backgroundColor: "#6fd5f1", color: "#000000"}} component="span" >
                        Upload Logo
                    </Button>
                </label>  </>) 
                }


        </Box>


    );
}