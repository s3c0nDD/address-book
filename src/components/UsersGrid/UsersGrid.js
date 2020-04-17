import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.users === nextProps.users;
};

const UsersGrid = memo(({ users, onOpenModal, onFetchUsers }) => {
  const classes = useStyles();

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
            onClick={onFetchUsers}>
            Fetch moar users!
          </Button>
        </Grid>
      </Grid>
      {!!users?.length && (
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
                onOpenModal={onOpenModal}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}, shouldNotRerender);

export default UsersGrid;
