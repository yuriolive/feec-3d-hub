import React from 'react';
import { Container, Button, Row, Col } from 'reactstrap';
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

const Tutorial = ({ match }) => (
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
          <Button color="primary" block>Começar Tutorial</Button>
        </Col>
      </Row>
    </Container>
    <h1 className="display-4">ID: {match.params.id}</h1>
  </div>
);

Tutorial.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tutorial;
