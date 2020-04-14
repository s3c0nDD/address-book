import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../store/module';

const useContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.app.users);

  const doFetchUsers = () => dispatch(fetchUsers());

  return [{ users }, { doFetchUsers }]
};

export default useContainer;