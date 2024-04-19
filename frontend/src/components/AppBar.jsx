import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LogoutButton from './LogoutButton';
import { useStyles } from '../styles';
import CreatePresentationModal from '../components/CreatePresentationModal';
// import { useLocation } from 'react-router-dom';

const PrestoAppBar = ({ loginCheck, token, setTokenFunction }) => {
  const classes = useStyles();
  // const location = useLocation();

  const dashboardCheck = true;

  return (
    <AppBar position="static">
      <Toolbar className={classes.appBar}>
        <div className={classes.appBarContainer}>
          <Typography variant="h6" style={{ marginRight: '20px' }}>
          Presto
          </Typography>
          {dashboardCheck && <CreatePresentationModal token={token} />}
        </div>
        {loginCheck && <LogoutButton token={token} setToken={setTokenFunction} />}
      </Toolbar>
    </AppBar>
  );
};

export default PrestoAppBar;
