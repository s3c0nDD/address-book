import React, { useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { makeStyles } from '@material-ui/core/styles';

import UsersGridLayout, { UsersGridLayoutMessage } from '../UsersGridLayout';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4)
  },
  catalogEnd: {
    marginTop: theme.spacing(4)
  }
}));

/**
 * Checks props and decide if should not re-render
 * @param {object} prevProps previous props
 * @param {object} nextProps next props
 * @returns {boolean}
 */
const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.users === nextProps.users
    && prevProps.hideView === nextProps.hideView;
};

/**
 * User grid infinite component
 * @param {object} props component's props
 * @param {boolean} props.hasMore has more users to fetch flag
 * @param {array} props.users users data
 * @param {boolean} props.hideView hide grid view flag
 * @param {function} props.onOpenModal open user modal handler
 * @param {function} props.onLoadMore load more users handler
 */
const UsersGridInfinite = memo(({
  hasMore,
  users,
  hideView,
  onOpenModal,
  onLoadMore
}) => {
  const classes = useStyles();

  const scrollDisplayStyle = useMemo(
    () => (hideView ? { display: 'none' } : {}),
    [hideView]
  );

  return (
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
      {!hasMore && <UsersGridLayoutMessage
        className={classes.catalogEnd}
        message={'End of users catalog'}
      />}
    </InfiniteScroll>
  );
}, shouldNotRerender);

export default UsersGridInfinite;

UsersGridInfinite.propTypes = {
  hasMore: PropTypes.bool,
  users: PropTypes.array.isRequired,
  hideView: PropTypes.bool,
  onOpenModal: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired
};