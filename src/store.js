import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import { historyMiddleware } from './history';
import Reducers from './reducers';
import Sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [historyMiddleware, sagaMiddleware];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (process.env.NODE_ENV === 'production') ?
  (compose) : (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(...middleware), autoRehydrate()));
/* eslint-enable */

sagaMiddleware.run(Sagas);

// Begin periodically persisting the store
persistStore(store);

export default store;
