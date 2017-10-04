import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location } }}
        />
      ))}
  />
);

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  component: PropTypes.element.isRequired,
};

const mapStateToProps = state => ({ loggedIn: state.user.loggedIn });

export default connect(mapStateToProps)(PrivateRoute);
