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
    marginTop: '1em'
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
