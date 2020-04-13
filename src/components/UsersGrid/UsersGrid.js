import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { getUser } from '../../services/api.service';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100
  }
}));

const UsersGrid = () => {
  const classes = useStyles();
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getUser();
      console.log('users', result);
      setUsers(result);
    };

    fetchData();
  }, []);

  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Grid>
    </Grid>
  );
};

export default UsersGrid;
