import React from 'react';
import { useNavigate, Navigate, /* useParams - commented out for mock */ } from 'react-router-dom';
import axios from 'axios';
import {
  AppBar,
  Button,
  Modal,
  TextField,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useStyles } from '../styles';

function Presentation ({ token, presentationId }) { // added presentationId param for mock
  const classes = useStyles();
  // const { presentationId } = useParams(); - commented out for mock
  const navigate = useNavigate();

  const [presentation, setPresentation] = React.useState(null);
  const [editTitleValue, setEditTitleValue] = React.useState('');
  const [editThumbnailValue, setEditThumbnailValue] = React.useState('');
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [editTitleVisible, setEditTitleVisible] = React.useState(false);
  const [editThumbnailVisible, setEditThumbnailVisible] = React.useState(false);
  const [deleteConfirmVisible, setDeleteConfirmVisible] = React.useState(false);
  const [error, setError] = React.useState(null);

  /*
  presentation structure:
    title: "",
    thumbnail: "",
    description: "",
    numSlides: 0,
    slides: {},
    deleted: false,
  */

  // Mock Presentation - used for testing //
  const mockPresentation = {
    title: 'Sample Presentation',
    thumbnail: 'sample-thumbnail.jpg',
    description: 'This is a sample presentation.',
    numSlides: 3,
    slides: {
      1: {
        content: 'Slide 1 content',
      },
      2: {
        content: 'Slide 2 content',
      },
      3: {
        content: 'Slide 3 content',
      },
    },
    deleted: false,
  };

  // Fetch presentation info whenever presentationId or token values are changed
  React.useEffect(() => {
    // if statement for loading mock presentation
    if (presentationId === 'sample') {
      setPresentation(mockPresentation);
    } else {
      axios.get(`http://localhost:5005/store/slides/${presentationId}`, {
        headers: {
          Authorization: token,
        }
      }).then((response) => {
        // set presentation data if the presentation isn't deleted, otherwise throw an error
        if (!response.data.deleted) {
          setPresentation(response.data);
          setEditTitleValue(response.data.title);
          setEditThumbnailValue(response.data.thumbnail);
          setError(null);
        } else {
          setError(new Error('Presentation is deleted'));
          return Promise.reject(new Error('Presentation is deleted'));
        }
      }).catch((error) => {
        setError(new Error('Error fetching presentation'));
        console.error('Error fetching presentation:', error);
      });
    }
  }, [presentationId, token]);

  // save presentation details and put in user's data store
  const savePresentation = async () => {
    try {
      await axios.put('http://localhost:5005/store', {
        store: {
          slides: { presentationId: { presentation } },
        }
      }, {
        headers: {
          Authorization: token,
        }
      });
      alert('Presentation Saved');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const editTitleSave = () => {
    setPresentation({
      ...presentation,
      title: editTitleValue,
    });
    setEditTitleVisible(false);
  };

  const editThumbnailSave = () => {
    setPresentation({
      ...presentation,
      thumbnail: editThumbnailValue,
    });
    setEditThumbnailVisible(false);
  };

  // soft 'delete' a presentation by marking the 'deleted' field as true
  const deletePresentation = async () => {
    try {
      await axios.put('http://localhost:5005/store', {
        store: {
          slides: { presentationId: { deleted: true } },
        }
      }, {
        headers: {
          Authorization: token,
        }
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error deleting presentation:', error);
    }
  };

  // change slide
  const slideChange = (direction) => {
    if (direction === 'next' && currentSlideIndex < presentation.numSlides - 1) {
      setCurrentSlideIndex((prevIndex) => prevIndex + 1);
    } else if (direction === 'prev' && currentSlideIndex > 0) {
      setCurrentSlideIndex((prevIndex) => prevIndex - 1);
    }
  };

  const closeDeleteConfirmation = () => {
    setDeleteConfirmVisible(false);
  };

  // add new slide to presentation
  const addSlide = () => {
    const newSlideIndex = presentation.numSlides + 1;
    setPresentation({
      ...presentation,
      numSlides: newSlideIndex,
      slides: {
        ...presentation.slides,
        [newSlideIndex]: {
          content: '',
        },
      },
    });
    // set the current slide to the newly added slide
    setCurrentSlideIndex(newSlideIndex - 1);
  };

  // delete slide from presentation
  const deleteSlide = () => {
    if (presentation.numSlides === 1) {
      alert('This is the last slide in the presentation, please delete the presentation instead.');
      return;
    }

    const newSlides = { ...presentation.slides };
    delete newSlides[currentSlideIndex + 1];

    setPresentation({
      ...presentation,
      numSlides: presentation.numSlides - 1,
      slides: newSlides,
    });

    // adjust current slide index to previous if index is now invalid
    if (currentSlideIndex === presentation.numSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  if (token === null || token === 'null') {
    return <Navigate to="/login" />
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!presentation) {
    return <div>Loading...</div>;
  }

  const slidesArray = Object.values(presentation.slides); // Convert slides object to array

  return <>
    {/* Top Bar */}
    <AppBar className={classes.presentationTopBar} position="static">
      <div className={classes.presentationTopBarLeft}>
        <Typography variant="h2">{presentation.title}</Typography>
        <Button className={classes.topBarButton} onClick={() => setEditTitleVisible(true)}>
          Edit Title
        </Button>
        <Button className={classes.topBarButton} onClick={() => setEditThumbnailVisible(true)}>
          Edit Thumbnail
        </Button>
      </div>
      <div className={classes.presentationTopBarRight}>
        <Button className={classes.topBarButton} onClick={() => savePresentation()}>
          Save
        </Button>
        <Button className={classes.topBarButton} onClick={() => setDeleteConfirmVisible(true)}>
          Delete Presentation
        </Button>
        <Button className={classes.topBarButton} onClick={() => navigate('/dashboard')}>
          Back
        </Button>
      </div>
    </AppBar>

    {/* Slide and Slide Controls */}
    <div className={classes.slideContainer}>
      <Grid className={classes.slideContent} container spacing={2}>
        <Typography variant="body1">{slidesArray[currentSlideIndex]?.content}</Typography>
      </Grid>

      <div className={classes.slideControlsLeft}>
        <IconButton className={classes.slideControlIcon} onClick={() => slideChange('prev')} disabled={currentSlideIndex === 0}>
          <ArrowLeftIcon />
        </IconButton>
      </div>
      <div className={classes.slideControlsRight}>
        <IconButton className={classes.slideControlIcon} onClick={addSlide} >
          <AddIcon/>
        </IconButton>
        <IconButton className={classes.slideControlIcon} onClick={() => slideChange('next')} disabled={currentSlideIndex === presentation.numSlides - 1}>
          <ArrowRightIcon />
        </IconButton>
        <IconButton className={classes.slideControlIcon} onClick={deleteSlide} >
          <DeleteIcon/>
        </IconButton>
      </div>
    </div>

    {/* Slide Number */}
    <div className={classes.slideNumber}>{currentSlideIndex + 1}</div>

    {/* Edit Title Modal */}
    <Modal className={classes.editModal} open={editTitleVisible} onClose={editTitleSave}>
      <div className={classes.modalContent}>
        <TextField
          label="Title"
          value={editTitleValue}
          onChange={(e) => setEditTitleValue(e.target.value)}
        />
        <Button onClick={editTitleSave}>Save</Button>
      </div>
    </Modal>

    {/* Edit Thumbnail Modal */}
    <Modal className={classes.editModal} open={editThumbnailVisible} onClose={editThumbnailSave}>
      <div className={classes.modalContent}>
        <TextField
          label="Thumbnail"
          value={editThumbnailValue}
          onChange={(e) => setEditThumbnailValue(e.target.value)}
        />
        <Button onClick={editThumbnailSave}>Save</Button>
      </div>
    </Modal>

    {/* Delete Confirmation Dialog */}
    <Dialog open={deleteConfirmVisible} onClose={closeDeleteConfirmation}>
      <DialogTitle>Delete Presentation</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDeleteConfirmation} color="primary">
          No
        </Button>
        <Button onClick={deletePresentation} color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  </>;
}

export default Presentation;
