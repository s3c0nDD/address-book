import React, { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import UsersGridItem from './UsersGridItem';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4)
  },
  catalogEnd: {
    marginTop: theme.spacing(4)
  }
}));

const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.users === nextProps.users;
};

const UsersGrid = memo(({ users, onOpenModal, onLoadMore, hasMore }) => {
  const classes = useStyles();

  return (
    <>
      <InfiniteScroll
        className={classes.root}
        loadMore={onLoadMore}
        hasMore={hasMore}
      >
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
        {!hasMore && <Grid
          className={classes.catalogEnd}
          container
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Typography
              variant="h4"
              color="textSecondary"
            >
              End of users catalog
            </Typography>
          </Grid>
        </Grid>}
      </InfiniteScroll>
    </>
  );
}, shouldNotRerender);

export default UsersGrid;
