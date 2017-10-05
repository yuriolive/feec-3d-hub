import React from 'react';
import { Container, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AlertConfirmEmail = props => (
  <Container className="mt-4">
    <div className="mb-4">
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>
    </div>
  </Container>
);

AlertConfirmEmail.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ loggedIn: state.user.loggedIn });

export default connect(mapStateToProps)(AlertConfirmEmail);
