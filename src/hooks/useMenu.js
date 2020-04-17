import { useState } from 'react';

const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isOpen = Boolean(anchorEl);

  const handleOpen = (event) => { setAnchorEl(event.currentTarget) };

  const handleClose = () => { setAnchorEl(null) };

  return { anchorEl, isOpen, handleClose, handleOpen }
};

export default useMenu;