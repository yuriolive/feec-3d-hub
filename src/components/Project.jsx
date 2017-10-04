import React from 'react';
import { Container, Button, Row, Col, Badge } from 'reactstrap';
import PropTypes from 'prop-types';

const propis = {
  title: 'Anemometer - Low Friction Upright',
};

const style = {
  width: '100%',
  height: 400,
  'background-image': 'url(https://placeholdit.imgix.net/~text?txtsize=33&txt=800x800&w=800&h=800)',
  'background-position': 'center',
  'background-repeat': 'no-repeat',
  'background-size': 'cover',
};

const Project = props => (
  <div>
    <Container className="mt-3">
      <h2>{propis.title}</h2>
      <p>Adicionado em 24 de Julho de 2017</p>
    </Container>
    <Container>
      <Row>
        <Col md={{ size: 8 }}>
          <div style={style} />
        </Col>
        <Col>
          <Button color="primary" block>
            <i className="fa fa-download" aria-hidden="true" /> Baixar Projeto
          </Button>
          <div>
            <h5>Criado por</h5>
          </div>
          <div>
            <h5>Tags</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Badge>New</Badge>
              </li>
              <li className="list-inline-item">
                <Badge>New</Badge>
              </li>
              <li className="list-inline-item">
                <Badge>New</Badge>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="mt-3">
        <h3>Descrição</h3>
        <h3>Materiais</h3>
      </div>
    </Container>
    <h1 className="display-4">ID: {props.match.params.id}</h1>
  </div>
);

Project.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
