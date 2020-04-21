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

const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.users === nextProps.users
    && prevProps.show === nextProps.show
    && prevProps.processing === nextProps.processing;
};

const UsersGridSearched = memo(({ processing, show, users, onOpenModal, ...props }) => {
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