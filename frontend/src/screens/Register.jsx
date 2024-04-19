import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useStyles } from '../styles';

function Register ({ token, setTokenFunction }) {
  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  if (token !== null && token !== 'null') {
    return <Navigate to="/dashboard" />
  }

  // Posts register request and navigates to dashboard if successful
  const register = async () => {
    let userToken = '';

    try {
      const response = await axios.post('http://localhost:5005/admin/auth/register', {
        email,
        password,
        name
      });
      userToken = response.data.token;
      setTokenFunction(response.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response.data.error);
    }
    // also puts an empty 'slides' object and 'numPresentations' into the user's data store for future use
    try {
      await axios.put('http://localhost:5005/store', {
        store: {
          slides: {},
          numPresentations: 0
        }
      }, {
        headers: {
          Authorization: userToken,
        }
      });
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <div className={classes.loginRegisterContainer}>
      <h2 className={classes.loginRegisterContainerH1H2}>Register a Presto account</h2>
      Email:
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="example@email.com"
        className={classes.loginRegisterContainerInput}
      />
      <br />
      Password:
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className={classes.loginRegisterContainerInput}
      />
      <br />
      Confirm Password:
      <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        className={classes.loginRegisterContainerInput}
      />
      <br />
      Name:
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Blub Berkins"
        className={classes.loginRegisterContainerInput}
      />
      <br />
      <button className={classes.loginRegisterButton} onClick={register}>
        Register
      </button>
      <p className={classes.loginRegisterContainerP}>
        Already have a Presto account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Register;
