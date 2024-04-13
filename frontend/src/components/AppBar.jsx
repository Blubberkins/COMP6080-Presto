import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const PrestoAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
        Presto
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default PrestoAppBar;
