const MODULE_NAME = 'APP';

const ACTION_TYPES = {
  'INITIALIZE_REQUEST': `${MODULE_NAME}/INITIALIZE_REQUEST`,
  'BOTTOM_REACHED': `${MODULE_NAME}/BOTTOM_REACHED`,
  'MODAL_OPENED': `${MODULE_NAME}/MODAL_OPENED`,
  'MODAL_CLOSED': `${MODULE_NAME}/MODAL_CLOSED`,
  'NATIONALITY_TOGGLE': `${MODULE_NAME}/NATIONALITY_TOGGLE`,
  'NATIONALITY_SET': `${MODULE_NAME}/NATIONALITY_SET`,
  'USERS_FETCHING_STARTED': `${MODULE_NAME}/USERS_FETCHING_STARTED`,
  'USERS_FETCHING_ERROR': `${MODULE_NAME}/USERS_FETCHING_ERROR`,
  'USERS_FETCHING_SUCCESS': `${MODULE_NAME}/USERS_FETCHING_SUCCESS`,
  'USERS_SHOW_MORE': `${MODULE_NAME}/USERS_SHOW_MORE`
};

const CONSTANTS = {
  USERS_PER_TICK: 200,
  USERS_MAX_COUNT: 1000
};

export { ACTION_TYPES, CONSTANTS };
