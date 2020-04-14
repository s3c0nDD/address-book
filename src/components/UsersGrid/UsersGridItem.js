import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const UsersGridItem = ({ user, index }) => {
  return (
    <Grid item>
      <Typography
        variant="body1"
        color="inherit"
      >
        [{index}] {user?.name?.title} {user?.name?.first} (email: {user?.email})
      </Typography>
    </Grid>
  );
};

export default UsersGridItem;
