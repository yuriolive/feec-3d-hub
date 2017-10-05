import React from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Projects = props => (
  <Container className="mt-4">
    <div className="mb-4">
      <span className="h2">Projetos</span>
      {
        props.loggedIn ? (
          <Button tag={Link} to="/adicionar-projeto" color="primary" className="pull-right">
            <i className="fa fa-plus-circle" aria-hidden="true" /> Adicionar Projeto
          </Button>
        ) : ('')
      }
    </div>
  </Container>
);

Projects.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ loggedIn: state.user.loggedIn });

export default connect(mapStateToProps)(Projects);
