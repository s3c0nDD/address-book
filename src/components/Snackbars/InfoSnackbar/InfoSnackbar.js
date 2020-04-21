import React from 'react';
import PropTypes from 'prop-types';

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

InfoSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool
};