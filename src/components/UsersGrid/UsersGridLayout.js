import React, { memo } from 'react';

import Grid from '@material-ui/core/Grid';

import UsersGridItem from './UsersGridItem';

const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.users === nextProps.users;
};

const UsersGridLayout = memo(({ users, onOpenModal }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      {users?.map((user, index) => (
        <Grid
          item
          key={user.id.value}
          xs={6}
          sm={4}
          md={3}
          lg={2}
        >
          {index}
          <UsersGridItem
            user={user}
            onOpenModal={onOpenModal}
          />
        </Grid>
      ))}
    </Grid>
  );
}, shouldNotRerender);

export default UsersGridLayout;
