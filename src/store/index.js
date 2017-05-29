import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers';

//TODO: Add predicate to disable loging in production 
const logger = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
);

export default store;
