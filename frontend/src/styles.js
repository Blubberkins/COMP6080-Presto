import { makeStyles } from '@mui/styles';
// import { borderRadius } from '@mui/system';

export const useStyles = makeStyles((theme) => ({
  // Login and Register Elements
  loginRegisterContainer: {
    height: '600px',
    width: '400px',
    minWidth: '300px',
    maxWidth: '80%',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid black',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    // theme (universal) properties
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
  },

  loginRegisterContainerH1H2: {
    marginBottom: '1em',
    textAlign: 'center',
  },

  loginRegisterContainerInput: {
    display: 'block',
    height: '20px',
    width: '80%',
  },

  loginRegisterContainerP: {
    marginTop: '2em',
    fontSize: '0.8em',
  },

  loginRegisterButton: {
    height: '30px',
    width: '125px',
  },

  // Presentation Elements
  presentationTopBar: {
    '&.MuiAppBar-root': {
      flexDirection: 'row',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    padding: theme.spacing(1, 2),
    fontSize: '1.1em',
    // Adjust font size for smaller screens
    [theme.breakpoints.down('md')]: {
      fontSize: '0.9em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.4em',
      '& > *': {
        marginRight: theme.spacing(0.5), // Adjust spacing for extra small screens
      },
    },
  },

  presentationTopBarLeft: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  presentationTopBarRight: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  topBarButton: {
    '&.MuiButton-root': {
      color: 'white',
      minWidth: 'auto',
      padding: theme.spacing(0.5, 1),
    },
    fontSize: '0.8em',
    // Adjust font size and padding for smaller screens
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7em',
      padding: theme.spacing(0.4, 0.8),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.6em',
      padding: theme.spacing(0.3, 0.7),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.3em',
      padding: theme.spacing(0.2, 0.5),
    },
  },

  editModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    boxSizing: 'border-box',
  },

  slideContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    width: '70%',
    border: '2px solid black',
    margin: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },

  slideContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  slideControlsLeft: {
    position: 'absolute',
    left: '-48px', // position left outside of slide
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  slideControlsRight: {
    position: 'absolute',
    right: '-48px', // position right outside of slide
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  slideControlIcon: {
    fontSize: '2rem',
  },

  slideNumber: {
    width: '50px',
    height: '50px',
    textAlign: 'center',
    fontSize: '1em',
  },

  // Dashboard Elements
  appBar: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  presentationCardContainer: {
    display: 'flex',
    marginTop: '1em',
    flexWrap: 'wrap',
    gap: '10px',
  },

  presentationCard: {
    marginRight: '1em',
  },

  appBarContainer: {
    display: 'flex',
    alignItems: 'center'
  },

  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5], // This line is removed to prevent shadow effect
    padding: theme.spacing(2, 4, 3),
  },
}));
