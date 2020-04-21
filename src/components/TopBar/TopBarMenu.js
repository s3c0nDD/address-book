import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { ROUTES } from '../../Routes';

const TopBarMenu = ({ anchorEl, handleClose, open }) => {
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
      open={open}
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

export default TopBarMenu;

TopBarMenu.propTypes = {
  anchorEl: PropTypes.any,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};