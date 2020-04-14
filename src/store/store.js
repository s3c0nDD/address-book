import { createStore, applyMiddleware, compose } from 'redux';

import makeReducers from './reducers';
import makeMiddlewares from './middlewares';

const makeStore = (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    makeReducers(),
    initialState,
    composeEnhancers(
      applyMiddleware(
        ...makeMiddlewares()
      )
    )
  );
};

export default makeStore;
