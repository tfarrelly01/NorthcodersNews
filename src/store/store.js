import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducer/reducer';

const logger = createLogger();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, logger),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;