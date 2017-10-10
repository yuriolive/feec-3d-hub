import React from 'react';
import { bindActionCreators } from 'redux';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import { getProjects } from '../actions/index';
import ProjectCard from '../containers/ProjectCard';

class Projects extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return (
      <Container className="mt-4">
        <div className="mb-4">
          <span className="h2">Projetos</span>
          {
            this.props.loggedIn ? (
              <Button tag={Link} to="/adicionar-projeto" color="primary" className="pull-right">
                <i className="fa fa-plus-circle" aria-hidden="true" /> Adicionar Projeto
              </Button>
            ) : ('')
          }
        </div>
        <div className="row">
          { this.props.projects.map(p => (
            <div className="col-md-4">
              <LazyLoad height={200} once>
                <ProjectCard
                  image={p.imageUrl}
                  title={p.title}
                  url={p.url}
                  key={p.id}
                />
              </LazyLoad>
            </div>))
          }
        </div>
      </Container>
    );
  }
}

Projects.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf({
    image: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    materials: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    user: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
  }).isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  projects: state.projects.values,
});

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ getProjects }, dispatch);

// We don't want to return the plain UserList (component) anymore, 
// we want to return the smart Container
// UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Projects);
