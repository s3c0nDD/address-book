import React  from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/**
 * User grid layout message component
 * @param {object} props component's props
 * @param {object} props.className classnames object
 * @param {function} props.message text to present
 */
const UsersGridLayoutMessage = ({ className, message }) => {
  return (
    <Grid
      className={className}
      container
      justify="center"
      alignItems="center"
      spacing={4}
    >
      <Grid item>
        <Typography
          variant="h4"
          color="textSecondary"
        >
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UsersGridLayoutMessage;

UsersGridLayoutMessage.propTypes = {
  className: PropTypes.any,
  message: PropTypes.string.isRequired
};