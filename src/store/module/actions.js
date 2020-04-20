import { ACTION_TYPES } from './constants';

export const initializeUsers = () => ({
  type: ACTION_TYPES.INITIALIZE_REQUEST
});

export const bottomReached = () => ({
  type: ACTION_TYPES.BOTTOM_REACHED
});

export const openModal = (user) => ({
  type: ACTION_TYPES.MODAL_OPENED,
  payload: user
});

export const closeModal = () => ({
  type: ACTION_TYPES.MODAL_CLOSED
});

export const searchTextChange = (text) => ({
  type: ACTION_TYPES.SEARCH_TEXT_CHANGE,
  payload: text
});

export const toggleNationality = (nationalityName) => ({
  type: ACTION_TYPES.NATIONALITY_TOGGLE,
  payload: nationalityName
});
