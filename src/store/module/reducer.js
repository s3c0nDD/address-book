import { ACTION_TYPES } from './constants';

const initialState = {
  loading: false,
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
        loading: true
      };

    case ACTION_TYPES.USERS_FETCHED:
      return {
        ...state,
        loading: false,
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
        loading: initialState.loading,
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
