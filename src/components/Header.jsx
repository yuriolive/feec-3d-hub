import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Badge,
  Card,
  CardTitle,
  CardImg,
  CardImgOverlay,
} from 'reactstrap';

const Header = () => (
  <div>
    <Jumbotron>
      <Container>
        <Row>
          <Col md="7" sm="12" xs="12">
            <h1 className="display-4">O espaço de prototipação</h1>
            <hr className="my-2 mt-4" />
            <p className="lead">
              Aprenda a usar e a fazer projetos usando a impressora 3D da FEEC
            </p>
            <p className="lead">
              <Button color="primary">Saiba mais</Button>
            </p>
          </Col>
          <Col md="5" sm="12" xs="12">
            <Card inverse className="text-right">
              <CardImg
                width="100%"
                alt="Impressora AO VIVO"
                src="http://143.106.50.132:8100/Mjpeg/0?authToken=983fa688-2942-4a4c-9cd0-e95abed9f87c"
              />
              <CardImgOverlay>
                <CardTitle><Badge color="danger">AO VIVO</Badge></CardTitle>
              </CardImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </div>
);

export default Header;
