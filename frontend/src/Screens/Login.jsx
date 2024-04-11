import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

function Login ({ token, setTokenFunction }) {
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
    <div className="login-register-container">
      <h1>Login to Presto</h1>
      Email: <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder="example@email.com" /><br />
      Password: <input type="password" onChange={e => setPassword(e.target.value)} value={password} /><br />
      <button className="login-register-button" onClick={login}>Login</button>
      <p>New to Presto? <a href="/register">Register here</a></p>
    </div>
  );
}

export default Login;
