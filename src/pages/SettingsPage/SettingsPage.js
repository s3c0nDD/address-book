import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import NationalitySwitchGroup from '../../components/NationalitySwitchGroup';

const useStyles = makeStyles((theme) => ({
  textWrapper: {
    marginTop: 50,
    marginBottom: 50
  }
}));

const SettingsPage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        className={classes.textWrapper}
      >
        <Typography
          variant="body1"
          color="inherit"
        >
          Settings page
        </Typography>
      </Grid>
      <Grid item>
        <NationalitySwitchGroup />
      </Grid>
    </Grid>
  );
};

export default SettingsPage;
