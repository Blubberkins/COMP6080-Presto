import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LogoutButton from './LogoutButton';
import { useStyles } from '../styles';

const PrestoAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.appBar}>
        <Typography variant="h6">
        Presto
        </Typography>
        <LogoutButton/>
      </Toolbar>
    </AppBar>
  );
};

export default PrestoAppBar;
