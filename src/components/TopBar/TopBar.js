import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useMenu from '../../hooks/useMenu';
import TopBarMenu from './TopBarMenu';

const TopBar = () => {
  const { anchorEl, isOpen, handleClose, handleOpen } = useMenu();

  return (
    <AppBar position="fixed">
      <TopBarMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        isOpen={isOpen}
      />
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>
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