import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const makeMiddlewares = () => {
  const isDevelopmentMode = process.env.NODE_ENV !== 'production';

  const middlewares = [
    thunk
  ];

  if (isDevelopmentMode) {
    middlewares.push(createLogger());
  }

  return middlewares;
};

export default makeMiddlewares;
