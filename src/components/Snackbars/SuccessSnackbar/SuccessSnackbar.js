import React from 'react';
import PropTypes from 'prop-types';

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

SuccessSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool
};