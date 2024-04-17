import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useStyles } from '../styles';

function Login ({ token, setTokenFunction }) {
  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  if (token !== null && token !== 'null') {
    return <Navigate to="/dashboard" />
  }

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5005/admin/auth/login', {
        email,
        password,
      });
      setTokenFunction(response.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <div className={classes.loginRegisterContainer}>
      <h1 className={classes.loginRegisterContainerH1H2}>Login to Presto</h1>
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
      <button className={classes.loginRegisterButton} onClick={login}>
        Login
      </button>
      <p className={classes.loginRegisterContainerP}>
        New to Presto? <a href="/register">Register here</a>
      </p>
    </div>

  );
}

export default Login;
