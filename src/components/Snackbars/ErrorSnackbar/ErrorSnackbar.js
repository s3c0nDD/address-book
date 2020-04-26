import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import CommonSnackbar from '../CommonSnackbar';

/**
 * Error snackbar component
 * @param {object} props component's props
 * @param {boolean} props.open snackbar open state
 */
const ErrorSnackbar = ({ open }) => {
  /**
   * Handle reload button click
   */
  const onReloadButtonClick = () => {
    window.location.reload();
  };

  return (
    <CommonSnackbar
      action={
        <Button
          color="inherit"
          variant="outlined"
          size="medium"
          onClick={onReloadButtonClick}
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