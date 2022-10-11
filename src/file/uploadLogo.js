import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function UploadLogo() {
    return (
        <>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
            />
            <label htmlFor="raised-button-file">
                <Button variant="raised" component="span" >
                    Upload Logo
                </Button>
            </label>
        </>

    );
}