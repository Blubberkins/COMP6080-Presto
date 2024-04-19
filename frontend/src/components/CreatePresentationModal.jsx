import React from 'react';
import { useStyles } from '../styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePresentationModal = ({ token }) => {
  const [open, setOpen] = React.useState(false);
  const [presentationName, setPresentationName] = React.useState('');
  const [error, setError] = React.useState(false);
  const [numPresentations, setNumPresentations] = React.useState(-1)
  const classes = useStyles();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createPresentation = async () => {
    // Check if form was submitted
    if (!presentationName) {
      setError(true);
      return;
    }

    try {
      const response = await axios.get('http://localhost:5005/store', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setNumPresentations(response.data.store.numPresentations);
      const currData = response.data;
      const newData = currData;
      const newPresentation = {
        title: presentationName,
        thumbnail: '',
        description: '',
        numSlides: 0,
        slides: {},
        deleted: false
      }
      const presentationId = newData.store.numPresentations;
      newData.store.slides[numPresentations] = newPresentation;
      newData.store.numPresentations = numPresentations + 1;

      await axios.put('http://localhost:5005/store', newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      handleClose();
      navigate(`/presentation/${presentationId}`);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleOpen} style={{ color: 'white', borderColor: 'white' }}>Create</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
            <h2 id="modal-modal-title">Give your presentation a name</h2>
            <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            style={{ marginLeft: '0' }}
            >
            <TextField
                required
                error={error}
                helperText={error ? 'Presentation name is required' : ''}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={(e) => setPresentationName(e.target.value)}/>
            </Box>
            <Button onClick={createPresentation} style={{ marginLeft: '0' }}>Create Presentation</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default CreatePresentationModal;
