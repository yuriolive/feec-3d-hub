import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

// Import bootstrap
import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';

// Import the redux store and browser history
import store from './store';
import { history } from './history';

// Import the components
import AppNavbar from './components/AppNavbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';
import Error404 from './components/Error404';

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
