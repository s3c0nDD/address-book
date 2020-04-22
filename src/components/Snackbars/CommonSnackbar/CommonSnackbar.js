import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

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