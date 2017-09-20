import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Header = () => (
  <div>
    <Jumbotron>
      <div className="container">
        <h1 className="display-4">O espaço de prototipação</h1>
        <hr className="my-2 mt-4" />
        <p className="lead">
          Aprenda a usar e a fazer projetos usando a impressora 3D da FEEC
        </p>
        <p className="lead">
          <Button color="primary">Saiba mais</Button>
        </p>
      </div>
    </Jumbotron>
  </div>
);

export default Header;
