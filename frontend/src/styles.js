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

  presentationCardContainer: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    position: 'relative',
    width: '90%',
    maxWidth: '400px',
    margin: '0 auto',
    height: 0,
    paddingBottom: '45%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '60%',
    },
  },

  presentationCardH1: {
    marginBottom: '1em',
    position: 'absolute', // Position the H1 absolutely within its container
    top: 0,
    left: 0,
    margin: 0,
    padding: '0 10px',
  },

  appBar: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));
