import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useNationalitiesContainer from '../../hooks/useNationalitiesContainer';
import NationalitySwitchGroup from '../../components/NationalitySwitchGroup';

const useStyles = makeStyles(theme => ({
  textWrapper: {
    marginTop: 20,
    marginBottom: 40
  },
  switchesWrapper: {
    margin: `0 ${theme.spacing(4)}px`
  }
}));

/**
 * Settings page component
 */
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
        className={classes.textWrapper}
        item
      >
        <Typography
          variant="h5"
          color="inherit"
        >
          Settings
        </Typography>
      </Grid>
      <Grid
        className={classes.switchesWrapper}
        item
      >
        <NationalitySwitchGroup
          nationalities={nationalities}
          onToggleNationality={doToggleNationality}
        />
      </Grid>
    </Grid>
  );
};

export default SettingsPage;
