import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import useContainer from './useContainer';
import UsersGridItem from './UsersGridItem';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 50,
    marginBottom: 50
  }
}));

const UsersGrid = () => {
  const classes = useStyles();

  const [{ users }, { doFetchUsers }] = useContainer();

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => doFetchUsers()}>
            Fetch moar users!
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {users.map((user, index) => (
          <UsersGridItem
            key={user.email}
            user={user}
            index={index}
          />
        ))}
      </Grid>
    </>
  );
};

export default UsersGrid;
