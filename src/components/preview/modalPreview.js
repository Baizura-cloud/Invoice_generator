import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function donwloadAsPDF () {
  console.log("download as pdf logic")
}
export default function ModalPreview({onClose, onClickpreview, openPreview, billedTo, date, invoiceNo, addInfo, rows  }) {

  return (
    <div>
      <Button variant="outlined" onClick={onClickpreview}>
        Preview
      </Button>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={openPreview}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          Invoice
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {billedTo}
          </Typography>
          {/* <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography> */}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={donwloadAsPDF}>
            Download as PDF
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
