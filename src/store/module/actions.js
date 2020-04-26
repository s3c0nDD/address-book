import { ACTION_TYPES } from './constants';

/**
 * Initialize users state action
 * @returns {object}
 */
export const initializeUsers = () => ({
  type: ACTION_TYPES.INITIALIZE_REQUEST
});

/**
 * Bottom reached action
 * @returns {object}
 */
export const bottomReached = () => ({
  type: ACTION_TYPES.BOTTOM_REACHED
});

/**
 * Open modal action
 * @param {object} user user to show
 * @returns {object}
 */
export const openModal = (user) => ({
  type: ACTION_TYPES.MODAL_OPENED,
  payload: user
});

/**
 * Close modal action
 * @returns {object}
 */
export const closeModal = () => ({
  type: ACTION_TYPES.MODAL_CLOSED
});

/**
 * Initialize users state action
 * @param {string} text new search text
 * @returns {object}
 */
export const searchTextChange = (text) => ({
  type: ACTION_TYPES.SEARCH_TEXT_CHANGE,
  payload: text
});

/**
 * Toggle nationality action
 * @param {string} nationalityName nationality name
 * @returns {object}
 */
export const toggleNationality = (nationalityName) => ({
  type: ACTION_TYPES.NATIONALITY_TOGGLE,
  payload: nationalityName
});
