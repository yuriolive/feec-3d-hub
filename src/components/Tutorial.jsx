import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const Tutorial = ({ match }) => (
  <Container>
    <h1 className="display-4">ID: {match.params.id}</h1>
  </Container>
);

Tutorial.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Tutorial;
