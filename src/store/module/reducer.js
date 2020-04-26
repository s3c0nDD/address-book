import { ACTION_TYPES, CONSTANTS } from './constants';

/**
 * Initial state
 */
const initialState = {
  loading: false,
  error: null,
  users: [],
  usersPage: 1,
  usersCache: [],
  search: {
    users: [],
    processing: false,
    searchString: ''
  },
  modalUser: null,
  nationalities: {
    swiss: true,
    spanish: true,
    french: true,
    british: true
  }
};

/**
 * Module app reducer
 * @param {object} state current provided state
 * @param {object} action action provided
 * @param {*} action.payload action's payload
 * @param {string} action.type action's type
 * @returns {object} new state
 */
const appReducer = (state = initialState, { payload, type }) => {
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
        usersCache: payload,
        usersPage: state.usersPage + 1
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

    case ACTION_TYPES.SEARCH_TEXT_SET:
      return {
        ...state,
        search: {
          ...state.search,
          searchString: payload
        }
      };

    case ACTION_TYPES.SEARCH_TEXT_APPLY_STARTED:
      return {
        ...state,
        search: {
          ...state.search,
          processing: true
        }
      };

    case ACTION_TYPES.SEARCH_TEXT_APPLY_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          processing: false,
          users: payload
        }
      };

    case ACTION_TYPES.NATIONALITY_SET:
      return {
        ...state,
        loading: initialState.loading,
        users: initialState.users,
        usersCache: initialState.usersCache,
        usersPage: initialState.usersPage,
        search: initialState.search,
        modalUser: initialState.modalUser,
        nationalities: {
          ...state.nationalities,
          [payload]: !state.nationalities[payload]
        }
      };

    default: return state;
  }
};

export default appReducer;
