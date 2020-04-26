import { useState } from 'react';

/**
 * Custom React hook that helps using
 * Material-ui menu-related methods and properties
 *
 * @returns {Object}
 */
const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  /**
   * Menu open state selector
   */
  const isOpen = Boolean(anchorEl);

  /**
   * Open a menu
   * @param {object<SyntheticEvent>} event react event
   */
  const handleOpen = (event) => { setAnchorEl(event.currentTarget) };

  /**
   * Close a menu
   */
  const handleClose = () => { setAnchorEl(null) };

  return { anchorEl, isOpen, handleClose, handleOpen }
};

export default useMenu;