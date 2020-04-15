import { ACTION_TYPES } from './constants';

const initialState = {
  isLoading: false,
  users: [],
  modalUser: null,
  nationalities: {
    swiss: true,
    spanish: true,
    french: true,
    british: true
  }
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
        modalUser: payload
      };

    case ACTION_TYPES.MODAL_CLOSED:
      return {
        ...state,
        modalUser: null
      };

    case ACTION_TYPES.NATIONALITY_TOGGLED:
      return {
        ...state,
        isLoading: initialState.isLoading,
        users: initialState.users,
        nationalities: {
          ...state.nationalities,
          [payload]: !state.nationalities[payload]
        }
      };

    default: return state;
  }
};

export default appReducer;
