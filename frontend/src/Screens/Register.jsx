import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

function Register ({ token, setTokenFunction }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const navigate = useNavigate();

  if (token !== null && token !== 'null') {
    return <Navigate to="/dashboard" />
  }

  const register = async () => {
    try {
      const response = await axios.post('http://localhost:5005/admin/auth/register', {
        email,
        password,
        name
      });
      setTokenFunction(response.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <>
    Email: <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder="example@email.com" /><br />
    Password: <input type="password" onChange={e => setPassword(e.target.value)} value={password} /><br />
    Confirm Password: <input type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} /><br />
    Name: <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Blub Berkins" /><br />
    <button onClick={register}>Register</button>
    </>
  );
}

export default Register;