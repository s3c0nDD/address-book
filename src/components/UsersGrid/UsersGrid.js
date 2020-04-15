import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import useContainer from './useContainer';
import UsersGridItem from './UsersGridItem';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  button: {
    marginTop: 50,
    marginBottom: 50
  }
});

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
            onClick={doFetchUsers}>
            Fetch moar users!
          </Button>
        </Grid>
      </Grid>
      <Grid
        className={classes.root}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {users.map((user) => (
          <Grid
            item
            key={user.id.value}
          >
            <UsersGridItem
              user={user}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UsersGrid;
