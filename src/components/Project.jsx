import React from 'react';
import { bindActionCreators } from 'redux';
import { Container, Button, Row, Col, Badge } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { getProject } from '../actions/index';

moment.locale('pt-BR');

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.props.getProject(this.props.match.params.id);
  }

  render() {
    const style = {
      width: '100%',
      height: 400,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${this.props.project.imageUrl})`,
    };

    return (
      <div>
        <Container className="mt-3">
          <h2>{this.props.project.title}</h2>
          <p>Adicionado em {moment(this.props.project.date).format('LL')}</p>
        </Container>
        <Container>
          <Row>
            <Col md={{ size: 8 }}>
              <div style={style} />
            </Col>
            <Col>
              <Button
                tag="a"
                href={this.props.project.fileUrl}
                block
                color="primary"
                className="mb-3"
              >
                <i className="fa fa-download" aria-hidden="true" /> Baixar Projeto
              </Button>
              <div>
                <h5>Tags</h5>
                <ul className="list-inline">
                  {
                    this.props.project.tags.map(tag => (
                      <li className="list-inline-item">
                        <Badge>{tag}</Badge>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </Col>
          </Row>
          <div className="mt-3">
            <h3>Descrição</h3>
            <p>{ this.props.project.description }</p>
            <h3>Materiais</h3>
            <p>{ this.props.project.materials }</p>
          </div>
        </Container>
      </div>
    );
  }
}

Project.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    materials: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    user: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    fileUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  getProject: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  project: state.projects.currentValue,
});

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ getProject }, dispatch);

// We don't want to return the plain UserList (component) anymore, 
// we want to return the smart Container
// UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Project);
