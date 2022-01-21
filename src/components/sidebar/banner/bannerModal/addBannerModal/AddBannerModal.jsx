import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import './AddBannerModal.css'
import { IoMdClose } from 'react-icons/io';


const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const AddBannerModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
             <button onClick={handleOpen}>+ Add banner</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      <Stack direction='row' justifyContent='space-between'>
          <p className='bannerModalTitle'>Add banner</p>
          <IoMdClose className='Xicon' onClick={handleClose}/>
      </Stack>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
            <p className='inputTitle'>Site link:</p>
            <input type="text" />
          </Grid>
          <Grid item xs={6}>
            <p className='inputTitle'>Site link:</p>
            <select name="" id=""><option value="">Select...</option></select>
          </Grid>
          <Grid item xs={6}>
            <p className='inputTitle'>Order:</p>
            <input type="text" />
          </Grid>
          <Grid item xs={6}>
            <p className='inputTitle'>Banner image:</p>
            <input type='file' />
          </Grid>
          <Grid item xs={6}>
            <p className='inputTitle'>Comment of admin:</p>
            <input type="text" />
          </Grid>
      </Grid>
      <p className='cantAdd'> Can't add site link and Prfile together! Only the profile will  be accepted if you enter both!</p>
        <div className="BannerAddButton">
            <button>+ Add</button>
        </div>
        </Box>
      </Modal>
        </div>
    )
}

export default AddBannerModal
