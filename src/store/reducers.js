import { combineReducers } from 'redux';

import { appReducer } from './module';

/**
 * Make reducers
 * @returns {Reducer}
 */
const makeReducers = () => combineReducers({
  app: appReducer
});

export default makeReducers;
