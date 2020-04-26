import { createStore, applyMiddleware, compose } from 'redux';

import makeReducers from './reducers';
import makeMiddlewares from './middlewares';

/**
 * Make store
 * @param {object} initialState initial state
 * @returns {Store}
 */
const makeStore = (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const { middlewares, startRootSaga } = makeMiddlewares();

  const store = createStore(
    makeReducers(),
    initialState,
    composeEnhancers(
      applyMiddleware(
        ...middlewares
      )
    )
  );

  startRootSaga();

  return store;
};

export default makeStore;
