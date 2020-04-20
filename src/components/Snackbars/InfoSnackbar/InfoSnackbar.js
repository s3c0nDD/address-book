import React from 'react';

import CommonSnackbar from '../CommonSnackbar';

const InfoSnackbar = ({ message, open }) => {
  return (
    <CommonSnackbar
      open={open}
      message={message}
      severity="info"
    />
  )
};

export default InfoSnackbar;
