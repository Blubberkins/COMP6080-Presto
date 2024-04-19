import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function Logout ({ token, setToken }) {
  const logout = async () => {
    try {
      await axios.post('http://localhost:5005/admin/auth/logout', {}, {
        headers: {
          Authorization: token,
        }
      });
      setToken(null);
    } catch (err) {
      alert(err.response.data.error);
      setToken(null);
    }
  };

  return (
    <Button variant='contained' color='error' onClick={logout}>Logout</Button>
  );
}

export default Logout;
