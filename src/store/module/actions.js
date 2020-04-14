import { ACTION_TYPES, CONSTANTS } from './constants';
import { getUsers } from '../../services/api.service';

export const fetchUsers = () => async (dispatch, getState)  => {
  dispatch({
    type: ACTION_TYPES.USERS_FETCHING_STARTED
  });

  const users = await getUsers({
    usersCount: CONSTANTS.USERS_PER_TICK
  });

  console.log('FETCHED USERS:', users);

  dispatch({
    type: ACTION_TYPES.USERS_FETCHED,
    payload: users
  });
};

export const openModal = () => async (dispatch, getState)  => {
  dispatch({
    type: ACTION_TYPES.MODAL_OPENED
  });
};

export const closeModal = () => async (dispatch, getState)  => {
  dispatch({
    type: ACTION_TYPES.MODAL_CLOSED
  });
};
