import React  from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const UsersGridMessage = ({ className, message }) => {
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

export default UsersGridMessage;
