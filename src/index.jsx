import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import Reducers from './reducers';
import Sagas from './sagas';
import AppNavbar from './components/AppNavbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';
import Error404 from './components/Error404';


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

sagaMiddleware.run(Sagas);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route component={AppNavbar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/entrar" component={Login} />
          <Route exact path="/registrar" component={Register} />
          <Route exact path="/cursos" component={Courses} />
          <Route exact path="/tutoriais" component={Tutorials} />
          <Route exact path="/projetos" component={Projects} />
          <Route component={Error404} />
        </Switch>
        <Route component={Footer} />
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
