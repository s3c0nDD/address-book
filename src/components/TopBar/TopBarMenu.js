import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { ROUTES } from '../../Routes';

const TopBar = (props) => {
  const { anchorEl, handleClose, isOpen } = props;

  const originPositionObj = useMemo(() => ({
    vertical: 'top',
    horizontal: 'left',
  }), []);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={originPositionObj}
      keepMounted
      transformOrigin={originPositionObj}
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