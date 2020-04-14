import { ACTION_TYPES } from './constants';

const initialState = {
  isLoading: false,
  users: [],
  modalUser: null
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.USERS_FETCHING_STARTED:
      return {
        ...state,
        isLoading: true
      };

    case ACTION_TYPES.USERS_FETCHED:
      return {
        ...state,
        isLoading: false,
        users: [
          ...state.users,
          ...payload
        ]
      };

    case ACTION_TYPES.MODAL_OPENED:
      return {
        ...state,
        modalUser: 'opened!'
      };

    case ACTION_TYPES.MODAL_CLOSED:
      return {
        ...state,
        modalUser: null
      };

    default: return state;
  }
};

export default appReducer;
