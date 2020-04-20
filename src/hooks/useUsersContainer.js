import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CONSTANTS,
  bottomReached,
  initializeUsers
} from '../store/module';

const useUsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.app.users);
  const usersCache = useSelector(state => state.app.usersCache);
  const loading = useSelector(state => state.app.loading);
  const error = useSelector(state => state.app.error);
  const hasMore = (users?.length < CONSTANTS.USERS_MAX_COUNT);

  const doRequestMore = () => {
    dispatch(bottomReached());
  };

  useEffect(() => {
    const initialize = () => {
      dispatch(initializeUsers());
    };
    initialize();
  }, [dispatch]);


  console.log('usersCache', usersCache?.length );
  console.log('users', users?.length );

  return { doRequestMore, error, hasMore, loading, users }
};

export default useUsersContainer;