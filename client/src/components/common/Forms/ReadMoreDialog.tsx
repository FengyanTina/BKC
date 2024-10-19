import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
interface ReadMoreDialogProps {
    open: boolean;
    title:string;
    subtitle?:string;
    content:string;
    onClose: () => void;
  }
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function ReadMoreDialogs({
    open,
    title,
    subtitle,
    content,
    onClose,
  }: ReadMoreDialogProps) {
  

    const [fontSize, setFontSize] = React.useState(16);
    const handleFontSizeChange = (newValue: number | number[]) => {
      setFontSize(newValue as number); // Cast newValue to number
    };


  return (
    <React.Fragment>
      <BootstrapDialog
         open={open}
         onClose={onClose}
        aria-labelledby="customized-dialog-title"

      >
        <Typography variant='h3' sx={{ m: 0, p: 2 }} >
          {title}
        </Typography>
       
        {subtitle && (
             <Typography variant='h5'gutterBottom sx={{ m: 0, p: 2 }}>
            {subtitle}
           </Typography>
        )}
        <DialogContent dividers>
          <Typography gutterBottom>
          {content.split("\n").map((paragraph, index) => (
                <Box key={index} sx={{ display: "block", mb: 2 }}>
                  {paragraph}
                </Box>
              ))}
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
