import React, { useRef } from 'react';
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
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import * as htmlToImage from 'html-to-image';
import JsPDF from "jspdf";

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


export default function ModalPreview({ onClose, onClickpreview, openPreview, billedTo, date, invoiceNo, addInfo, rows }) {
  const domEl = useRef(null);
  const doc = new JsPDF({
    format: "a4",
    unit: "mm",
  });

  function  donwloadAsPDF(dataUrl) {
    console.log("download as pdf logic")
    doc.addImage(dataUrl, "PNG", 0, 0, 210, 297);
    doc.save("invoice.pdf")
  }

  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(domEl.current, {
      width: 600,
      height: 800
    });
    // console.log(dataUrl)
    // const link = document.createElement('a');
    // link.download = 'invoice.png';
    // link.href = dataUrl;
    // link.click();
    donwloadAsPDF(dataUrl);
  };

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
        <div id="domEl" ref={domEl}>
        <BootstrapDialogTitle id="customized-dialog-title" >
          Invoice
        </BootstrapDialogTitle>
        <DialogContent dividers>
        
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={6}>
                <Typography  align='justify'>
                  Billed to: 
                </Typography>
                <Typography align='justify'>
                {billedTo}
                </Typography>
              </Grid>
              <Grid item xs={2} md={2}>
              </Grid>
              <Grid item xs={4} md={4}>
                <Stack direction="column" spacing={2}>
                  <Typography>
                    Invoice No: {invoiceNo}
                  </Typography>
                  <Typography>
                    Date: {date}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={12}>
                <TableContainer  >
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price per unit</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.Item}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell  component="th" scope="row">
                            {row.Item}
                          </TableCell>
                          <TableCell align="right">{row.Quantity}</TableCell>
                          <TableCell align="right">{row.Price}</TableCell>
                          <TableCell align="right">{row.Total}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={6} md={4}>
              </Grid>
              <Grid item xs={6} md={8}>
                <Typography align='justify' >
                  Additional Information:
                </Typography>
                <Typography align='justify' >
                  {addInfo}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        </div>
        <DialogActions>
          <Button autoFocus onClick={downloadImage}>
            Download as PDF
          </Button>
          <Button autoFocus onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
      
    </div>
  );
}
