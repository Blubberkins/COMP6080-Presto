import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Register from './screens/Register';
import Presentation from './screens/Presentation';

function App () {
  let lsToken = null;
  if (localStorage.getItem('token')) {
    lsToken = localStorage.getItem('token');
  }
  const [token, setToken] = React.useState(lsToken);

  const setTokenAbstract = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard token={token} setTokenFunction={setTokenAbstract} />} />
      <Route path="/login" element={<Login token={token} setTokenFunction={setTokenAbstract} />} />
      <Route path="/register" element={<Register token={token} setTokenFunction={setTokenAbstract} />} />
      <Route path="/dashboard" element={<Dashboard token={token} setTokenFunction={setTokenAbstract} />} />
      <Route path="/presentation/:presentationId" element={<Presentation token={token} />} />
      {/* Route for the sample presentation */}
      <Route path="/presentation/sample" element={<Presentation token={token} presentationId="sample" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
