'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'next/image';
import { useState } from 'react';


export default function AlertDialog(props:any) {
  const [open, setOpen] = useState(false);
  const [count,setCount] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Increment = ()=>{
    setCount(count + 1)
  }
  const Decrement = ()=>{
    setCount(count + 1)
  }

  return (
    <React.Fragment>
      <Button className="bg-brown text-white hover:text-purple hover:font-bold mt-2 mb-4 w-2/3" onClick={handleClickOpen}>
        order now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         <Typography className='text-purple text-lg underline' >{props.title}</Typography> 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box className="flex items-center">
                <Box>
                <Typography> {props.description}</Typography>
                <Box className="flex  mt-4 gap-2 ">
                <Typography className='w-1/3 md:w-1/12 bg-purple rounded-sm text-white text-center text-lg' onClick={Increment}>-</Typography>
                <Typography className='w-1/3 md:w-1/12 bg-white rounded-sm text-purple text-center text-lg'>{count}</Typography>
                <Typography  className='w-1/3 md:w-1/12 bg-purple rounded-sm text-white text-center text-lg'onClick={Decrement}>+</Typography>
                </Box>
                </Box>
                <Image src={props.image} alt='' width={200} height={200}></Image>
            </Box>

           
          </DialogContentText>
        </DialogContent>
        <DialogActions className=' flex justify-center md:justify-start'>
            <Button onClick={handleClose} className='w-1/2 md:w-1/3 bg-purple text-white hover:bg-brown hover:font-bold ml-4 mb-4'>Add to cart</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}