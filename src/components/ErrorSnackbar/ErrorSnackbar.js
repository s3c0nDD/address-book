import React from 'react';

import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const SnackbarAlert = ({ open }) => {
  const doReload = () => {
    window.location.reload()
  };

  return (
    <Snackbar
      open={open}
    >
      <Alert
        variant="filled"
        severity="error"
        action={
          <Button
            color="inherit"
            variant="outlined"
            size="medium"
            onClick={doReload}
          >
            Reload app
          </Button>
        }
      >
        Error occurred, please click button to reload app
      </Alert>
    </Snackbar>
  )
};

export default SnackbarAlert;
