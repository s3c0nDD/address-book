import React from 'react';

import CommonSnackbar from '../CommonSnackbar';

const SuccessSnackbar = ({ open, message }) => {
  return (
    <CommonSnackbar
      open={open}
      message={message}
      severity="success"
    />
  )
};

export default SuccessSnackbar;
