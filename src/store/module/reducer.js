import { ACTION_TYPES, CONSTANTS } from './constants';

const initialState = {
  loading: false,
  error: null,
  users: [],
  usersCache: [],
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
    case ACTION_TYPES.USERS_SHOW_MORE:
      return {
        ...state,
        users: [
          ...state.users,
          ...state.usersCache.slice(0, CONSTANTS.USERS_PER_TICK)
        ],
        usersCache: [
          ...state.usersCache.slice(CONSTANTS.USERS_PER_TICK)
        ]
      };

    case ACTION_TYPES.USERS_FETCHING_STARTED:
      return {
        ...state,
        loading: true,
        error: initialState.error
      };

    case ACTION_TYPES.USERS_FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        usersCache: payload
      };

    case ACTION_TYPES.USERS_FETCHING_ERROR:
        return {
          ...state,
          loading: false,
          error: payload
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

    case ACTION_TYPES.NATIONALITY_SET:
      return {
        ...state,
        loading: initialState.loading,
        users: initialState.users,
        usersCache: initialState.usersCache,
        nationalities: {
          ...state.nationalities,
          [payload]: !state.nationalities[payload]
        }
      };

    default: return state;
  }
};

export default appReducer;
