import React from 'react';
import { bindActionCreators } from 'redux';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import { getTutorials } from '../actions/index';
import TutorialCard from '../containers/TutorialCard';

class Tutorials extends React.Component {
  componentDidMount() {
    this.props.getTutorials();
  }

  render() {
    return (
      <Container className="mt-4">
        <div className="mb-4">
          <span className="h2">Tutoriais</span>
          {
            this.props.loggedIn ? (
              <Button tag={Link} to="/adicionar-tutorial" color="primary" className="pull-right">
                <i className="fa fa-plus-circle" aria-hidden="true" /> Adicionar Tutorial
              </Button>
            ) : ('')
          }
        </div>
        <div className="row">
          { this.props.tutorials.map(p => (
            <div className="col-md-4">
              <LazyLoad height={200} once>
                <TutorialCard
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

Tutorials.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  tutorials: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  getTutorials: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  tutorials: state.tutorials.values,
});

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ getTutorials }, dispatch);

// We don't want to return the plain UserList (component) anymore, 
// we want to return the smart Container
// UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Tutorials);
