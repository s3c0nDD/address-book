import React, { memo, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import UsersGridLayout from './UsersGridLayout';
import UsersGridMessage from './UsersGridMessage';

const useStyles = makeStyles(theme => ({
  root: {
    padding: `0 ${theme.spacing(4)}px`
  },
  messageEmpty: {
    marginTop: theme.spacing(4)
  }
}));

const shouldNotRerender = (prevProps, nextProps) => {
  return prevProps.users === nextProps.users;
};

const UsersGridSearchResults = memo(({ users, onOpenModal }) => {
  const classes = useStyles();

  const scrollToTop = useCallback(() => {
    window.scroll(0,0);
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [users, scrollToTop]);

  return (
    <Box className={classes.root}>
      <UsersGridLayout
        users={users}
        onOpenModal={onOpenModal}
      />
      {!users?.length && <UsersGridMessage
        className={classes.messageEmpty}
        message={'No matching results'}
      />}
    </Box>
  );
}, shouldNotRerender);

export default UsersGridSearchResults;
