import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useNationalitiesContainer from './useNationalitiesContainer';
import NationalitySwitchGroup from '../../components/NationalitySwitchGroup';

const useStyles = makeStyles({
  textWrapper: {
    marginTop: 50,
    marginBottom: 50
  }
});

const SettingsPage = () => {
  const classes = useStyles();

  const { nationalities, doToggleNationality } = useNationalitiesContainer();

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
        <NationalitySwitchGroup
          nationalities={nationalities}
          onToggleNationality={doToggleNationality}
        />
      </Grid>
    </Grid>
  );
};

export default SettingsPage;
