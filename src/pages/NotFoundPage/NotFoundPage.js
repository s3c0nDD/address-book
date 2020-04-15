import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 200
  }
}));

const UsersGrid = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography
          variant="h2"
          color="textSecondary"
        >
          404 Page Not Found :(
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UsersGrid;
