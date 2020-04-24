import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CONSTANTS,
  bottomReached,
  initializeUsers,
  selectError,
  selectLoading,
  selectUsers
} from '../store/module';

const useUsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
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

  return { doRequestMore, error, hasMore, loading, users }
};

export default useUsersContainer;