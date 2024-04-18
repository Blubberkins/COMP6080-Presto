import React from 'react';
import axios from 'axios';

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
    <button onClick={logout}>Logout</button>
  );
}

export default Logout;
