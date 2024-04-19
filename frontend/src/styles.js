import { makeStyles } from '@mui/styles';

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
    },
    margin: theme.spacing(0, 1),
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

}));
