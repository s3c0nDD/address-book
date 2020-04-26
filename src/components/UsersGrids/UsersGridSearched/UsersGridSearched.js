import React, { memo, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import UsersGridLayout from '../UsersGridLayout/UsersGridLayout';
import UsersGridLayoutMessage from '../UsersGridLayout/UsersGridLayoutMessage';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 ${theme.spacing(4)}px`
  },
  messageEmpty: {
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
    && prevProps.show === nextProps.show
    && prevProps.processing === nextProps.processing;
};

/**
 * User grid searched component
 * @param {object} props component's props
 * @param {boolean} props.processing search processing flag
 * @param {boolean} props.show show search results flag
 * @param {array} props.users users data
 * @param {function} props.onOpenModal open user modal handler
 */
const UsersGridSearched = memo(({
  processing,
  show,
  users,
  onOpenModal,
  ...props
}) => {
  const classes = useStyles();

  const scrollToTop = useCallback(() => {
    window.scroll(0,0);
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [users, scrollToTop]);

  const shouldShowNoResultMessage = (!users?.length && !processing);

  return (
    <>
      {show && (
        <Box
          className={classes.root}
          {...props}
        >
          <UsersGridLayout
            users={users}
            onOpenModal={onOpenModal}
          />
          {shouldShowNoResultMessage && (
            <UsersGridLayoutMessage
              className={classes.messageEmpty}
              message={'No matching results'}
            />
          )}
        </Box>
      )}
    </>
  );
}, shouldNotRerender);

export default UsersGridSearched;

UsersGridSearched.propTypes = {
  processing: PropTypes.bool.isRequired,
  show: PropTypes.bool,
  users: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  props: PropTypes.arrayOf(PropTypes.any)
};