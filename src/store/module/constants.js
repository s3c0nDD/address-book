const MODULE_NAME = 'APP';

const ACTION_TYPES = {
  'USERS_FETCHING_STARTED': `${MODULE_NAME}/USERS_FETCHING_STARTED`,
  'USERS_FETCHED': `${MODULE_NAME}/USERS_FETCHED`,
  'MODAL_OPENED': `${MODULE_NAME}/MODAL_OPENED`,
  'MODAL_CLOSED': `${MODULE_NAME}/MODAL_CLOSED`,
  'NATIONALITY_TOGGLED': `${MODULE_NAME}/NATIONALITY_TOGGLE`
};

const CONSTANTS = {
  USERS_PER_TICK: 1000,
  USERS_MAX_COUNT: 1000,
  START_TICK: 1
};

export { ACTION_TYPES, CONSTANTS };
