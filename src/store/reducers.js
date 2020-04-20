import { combineReducers } from 'redux';

import { appReducer } from './module';

const makeReducers = () => combineReducers({
  app: appReducer
});

export default makeReducers;
