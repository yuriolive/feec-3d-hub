import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Projects = props => (
  <Container>
    <h1 className="display-4">Projetos</h1>
    {
      props.loggedIn ? (
        <Button tag={Link} to="/adicionar-projeto" color="primary">
          <i className="fa fa-plus-circle" aria-hidden="true" /> Adicionar Projeto
        </Button>
      ) : ('')
    }
  </Container>
);

Projects.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ loggedIn: state.user.loggedIn });

export default connect(mapStateToProps)(Projects);
