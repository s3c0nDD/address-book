import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 200,
  },
  text: {
    margin: '0 30px'
  }
});

/**
 * Not found page component
 */
const NotFoundPage = () => {
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
          className={classes.text}
          variant="h4"
          color="textSecondary"
        >
          404 Page Not Found :(
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
