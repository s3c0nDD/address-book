import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../store/module';

const useUsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.app.users);
  const loading = useSelector(state => state.app.loading);

  const doFetchUsers = () => dispatch(fetchUsers());

  return { users, loading, doFetchUsers }
};

export default useUsersContainer;