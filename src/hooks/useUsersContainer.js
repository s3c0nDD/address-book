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

/**
 * Custom React hook that acts as
 * a main users-related data container
 *
 * @returns {Object}
 */
const useUsersContainer = () => {
  const dispatch = useDispatch();

  /**
   * Fetched users selector
   */
  const users = useSelector(selectUsers);
  /**
   * Loading state selector
   */
  const loading = useSelector(selectLoading);
  /**
   * Error state selector
   */
  const error = useSelector(selectError);
  /**
   * Has option for more user's to fetch selector
   */
  const hasMore = (users?.length < CONSTANTS.USERS_MAX_COUNT);

  /**
   * Initialize a request more users action
   */
  const doRequestMore = () => {
    dispatch(bottomReached());
  };

  /**
   * Initialize a user's component
   */
  useEffect(() => {
    const initialize = () => {
      dispatch(initializeUsers());
    };
    initialize();
  }, [dispatch]);

  return { doRequestMore, error, hasMore, loading, users }
};

export default useUsersContainer;