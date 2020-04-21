import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import CommonSnackbar from '../CommonSnackbar';

const ErrorSnackbar = ({ open }) => {
  const doReload = () => {
    window.location.reload();
  };

  return (
    <CommonSnackbar
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
      open={open}
      message="Error occurred, please click button to reload app"
      severity="error"
    />
  )
};

export default ErrorSnackbar;

ErrorSnackbar.propTypes = {
  open: PropTypes.bool
};