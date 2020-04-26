import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { ROUTES } from '../../Routes';
import useMenu from '../../hooks/useMenu';
import TopBarMenu from './TopBarMenu';
import TopBarSearch from './TopBarSearch';

/**
 * Top bar component
 * @param {object} props component's props
 * @param {boolean} props.searchDisabled flag is search is disabled
 * @param {string} props.searchText search text state
 * @param {function} props.onSearchChange search state change handler
 */
const TopBar = ({ searchDisabled, searchText, onSearchChange, ...props }) => {
  const { anchorEl, isOpen, handleClose, handleOpen } = useMenu();
  const location = useLocation();

  /**
   * Handle search change
   * @param {object<SyntheticEvent>} event react event
   */
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  const showSearch = (location.pathname === ROUTES.root);

  return (
    <AppBar
      position="fixed"
      {...props}
    >
      <TopBarMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={isOpen}
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
        <Hidden
          only={'xs'}
        >
          <Typography
            variant="h6"
            color="inherit"
          >
            Address Book
          </Typography>
        </Hidden>
        {showSearch && (
          <TopBarSearch
            text={searchText}
            disabled={searchDisabled}
            onTextChange={handleChange}
          />
        )}
      </Toolbar>
    </AppBar>
  )
};

export default TopBar;

TopBar.propTypes = {
  searchDisabled: PropTypes.bool.isRequired,
  searchText: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  props: PropTypes.arrayOf(PropTypes.any)
};