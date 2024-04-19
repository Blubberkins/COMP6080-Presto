import React from 'react';
import { useStyles } from '../styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const CreatePresentationModal = ({ token }) => {
  const [open, setOpen] = React.useState(false);
  const [presentationName, setPresentationName] = React.useState('');
  const [error, setError] = React.useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createPresentation = () => {
    if (!presentationName) {
      setError(true); // Set error state to true if presentationName is empty
      return; // Prevent further execution
    }
    axios.get('http://localhost:5005/store', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      // GET THE NUM PRESENTATIONS
    });
    try {
      axios.put('http://localhost:5005/store', {
        store: {
          slides: {
            title: { presentationName },
            thumbnail: '',
            description: 'This is a description',
            numSlides: 0,
            slides: {},
            deleted: false
          }
        },
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    } catch (err) {
      alert(err.response.data.error)
    }
    handleClose();
  }

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
                onChange={setPresentationName}/>
            </Box>
            <Button onClick={createPresentation} style={{ marginLeft: '0' }}>Create Presentation</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default CreatePresentationModal;
