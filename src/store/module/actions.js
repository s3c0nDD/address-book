import { ACTION_TYPES, CONSTANTS } from './constants';
import { getUsers } from '../../services/api.service';

export const fetchUsers = () => async (dispatch, getState)  => {
  dispatch({
    type: ACTION_TYPES.USERS_FETCHING_STARTED
  });

  const nationalities = getState().app.nationalities;
  const selectedNationalities = Object.keys(nationalities)
    .filter((name) => nationalities[name]);

  const users = await getUsers({
    usersCount: CONSTANTS.USERS_PER_TICK,
    nationalities: selectedNationalities
  });

  console.log('FETCHED USERS:', users);

  dispatch({
    type: ACTION_TYPES.USERS_FETCHED,
    payload: users
  });
};

export const openModal = () => async (dispatch, getState)  => {
  dispatch({
    type: ACTION_TYPES.MODAL_OPENED,
    payload: 'opened!'
  });
};

export const closeModal = () => async (dispatch, getState)  => {
  dispatch({
    type: ACTION_TYPES.MODAL_CLOSED
  });
};

export const toggleNationality = (nationalityName) => async (dispatch, getState)  => {
  const nationalities = getState().app.nationalities;
  const isClickedCurrentlyOff = !nationalities[nationalityName];
  const selectedCount = Object.values(nationalities).filter(Boolean).length;

  if (isClickedCurrentlyOff || selectedCount > 1) {
    dispatch({
      type: ACTION_TYPES.NATIONALITY_TOGGLED,
      payload: nationalityName
    });
  }
};
