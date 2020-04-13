import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { ROUTES } from '../../Routes';

const TopBar = (props) => {
  const { anchorEl, handleClose, isOpen } = props;

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isOpen}
      onClose={handleClose}
    >
      <MenuItem
        onClick={handleClose}
        component={Link}
        to={ROUTES.root}
      >
        Users Gallery
      </MenuItem>
      <MenuItem
        onClick={handleClose}
        component={Link}
        to={ROUTES.settings}
      >
        Settings
      </MenuItem>
    </Menu>
  )
};

export default TopBar;