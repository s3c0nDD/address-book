import React from 'react';
import PropTypes from 'prop-types';

import CommonSnackbar from '../CommonSnackbar';

/**
 * Success snackbar component
 * @param {object} props component's props
 * @param {string} props.message message to show
 * @param {boolean} props.open snackbar open state
 */
const SuccessSnackbar = ({ message, open }) => {
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