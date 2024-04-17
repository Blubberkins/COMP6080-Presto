import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import LogoutButton from '../components/LogoutButton';

function Dashboard ({ token, setTokenFunction }) {
  const [store, setStore] = React.useState({});

  React.useEffect(() => {
    axios.get('http://localhost:5005/store', {
      headers: {
        Authorization: token,
      }
    }).then((response) => {
      setStore(response.data.store)
    });
  }, []);

  // user details will be logged every time store is updated
  React.useEffect(() => {
    console.log('Store:', store);
  }, [store]);

  if (token === null || token === 'null') {
    return <Navigate to="/login" />
  }
  return <>
    <LogoutButton token={token} setToken={setTokenFunction} /><br />
    Dashboard
  </>;
}

export default Dashboard;
