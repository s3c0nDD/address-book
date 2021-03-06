import React from 'react';
import PropTypes from 'prop-types';

import CommonSnackbar from '../CommonSnackbar';

/**
 * Info snackbar component
 * @param {object} props component's props
 * @param {string} props.message message to show
 * @param {boolean} props.open snackbar open state
 */
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