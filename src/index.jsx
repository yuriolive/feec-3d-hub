import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import 'bootstrap/dist/css/bootstrap.css';
import Reducers from './reducers';
// import Sagas from './sagas';
import App from './components/App';


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const middleware = [historyMiddleware, sagaMiddleware];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(...middleware)));
/* eslint-enable */

// sagaMiddleware.run(Sagas);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
