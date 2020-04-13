import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
        >
          Address Book
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default TopBar;