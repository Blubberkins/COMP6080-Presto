import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LogoutButton from './LogoutButton';
import { useStyles } from '../styles';

const PrestoAppBar = ({ loginCheck, token, setTokenFunction }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.appBar}>
        <Typography variant="h6">
        Presto
        </Typography>
        {loginCheck && <LogoutButton token={token} setToken={setTokenFunction} />}
      </Toolbar>
    </AppBar>
  );
};

export default PrestoAppBar;
