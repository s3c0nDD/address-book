import React from 'react';

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
