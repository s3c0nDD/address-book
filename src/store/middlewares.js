import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './module';

const sagaMiddleware = createSagaMiddleware();

/**
 * Make middleware
 * @returns {object}
 */
const makeMiddlewares = () => {
  const isDevelopmentMode = process.env.NODE_ENV === 'development';

  const middlewares = [
    sagaMiddleware
  ];

  if (isDevelopmentMode) {
    middlewares.push(
      createLogger({
        collapsed: true
      })
    );
  }

  return {
    middlewares,
    startRootSaga: () => { sagaMiddleware.run(rootSaga); }
  }
};

export default makeMiddlewares;
