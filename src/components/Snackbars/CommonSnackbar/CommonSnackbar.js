import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

/**
 * Common snackbar component
 * @param {object} props component's props
 * @param {function} props.action react component to show in action area
 * @param {string} props.message message to show
 * @param {boolean} props.open snackbar open state
 * @param {string} props.severity snackbar severity
 */
const CommonSnackbar = ({ action, message, open, severity, ...props }) => {
  return (
    <Snackbar
      {...props}
      open={open}
    >
      <Alert
        variant="filled"
        severity={severity}
        action={action}
      >
        {message}
      </Alert>
    </Snackbar>
  )
};

export default CommonSnackbar;

CommonSnackbar.propTypes = {
  action: PropTypes.element,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool,
  severity: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  props: PropTypes.arrayOf(PropTypes.any)
};