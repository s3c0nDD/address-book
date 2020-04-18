import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import rootSaga from './module/sagas';

const sagaMiddleware = createSagaMiddleware();

const makeMiddlewares = () => {
  const isDevelopmentMode = process.env.NODE_ENV !== 'production';

  const middlewares = [
    sagaMiddleware
  ];

  if (isDevelopmentMode) {
    middlewares.push(createLogger({
      collapsed: true
    }));
  }

  return {
    middlewares,
    startRootSaga: () => { sagaMiddleware.run(rootSaga); }
  }
};

export default makeMiddlewares;
