import React, { useMemo, memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { makeStyles } from '@material-ui/core/styles';

import UsersGridLayout from './UsersGridLayout';
import UsersGridMessage from './UsersGridMessage';
import UsersGridSearchResults from './UsersGridSearchResults';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4)
  },
  catalogEnd: {
    marginTop: theme.spacing(4)
  }
}));

const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.users === nextProps.users
    && prevProps.usersSearched === nextProps.usersSearched;
};

const UsersGrid = memo(({
  hasMore,
  users,
  usersSearched,
  showSearchResults,
  onOpenModal,
  onLoadMore
}) => {
  const classes = useStyles();

  const scrollDisplayStyle = useMemo(
    () => (showSearchResults ? { display: 'none' } : {}),
    [showSearchResults]
  );

  return (
    <>
      {showSearchResults && <UsersGridSearchResults
        users={usersSearched}
        onOpenModal={onOpenModal}
      />}
      <InfiniteScroll
        className={classes.root}
        style={scrollDisplayStyle}
        loadMore={onLoadMore}
        hasMore={hasMore}
        threshold={500}
      >
        <UsersGridLayout
          users={users}
          onOpenModal={onOpenModal}
        />
        {!hasMore && <UsersGridMessage
          className={classes.catalogEnd}
          message={'End of users catalog'}
        />}
      </InfiniteScroll>
    </>
  );
}, shouldNotRerender);

export default UsersGrid;
