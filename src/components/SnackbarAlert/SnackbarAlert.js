import React from 'react';

import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const SnackbarAlert = ({ autoHideDuration, message, open }) => {
  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      open={open}
    >
      <Alert
        variant="filled"
        severity="info"
      >
        {message}
      </Alert>
    </Snackbar>
  )
};

export default SnackbarAlert;
