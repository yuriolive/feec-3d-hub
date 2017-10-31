import React from 'react';
import { Card, CardBlock, CardTitle,
  CardLink, CardFooter } from 'reactstrap';
import PropTypes from 'prop-types';


/*
  <Card className="mt-3">
    <CardImg top width="100%" src={props.img.thubmnail} alt="Card image cap" />
    <CardBlock>
      <CardTitle>{props.title}</CardTitle>
      <CardSubtitle>adicionado por {props.author.name}</CardSubtitle>
      <CardText className="mt-3">{props.description}</CardText>
    </CardBlock>
    <CardFooter>
      <CardLink href={props.url} className="mr-auto">Ver mais</CardLink>
      <span className="float-right">
        <small className="text-muted">
          <i className="fa fa-clock-o" aria-hidden="true" /> 30 min
        </small>
      </span>
    </CardFooter>
  </Card>
*/

const TutorialCard = props => (
  <Card className="mt-3" key={props.key}>
    <CardBlock>
      <CardTitle>{props.title}</CardTitle>
    </CardBlock>
    <CardFooter>
      <CardLink href={props.url} className="mr-auto">Ver mais</CardLink>
    </CardFooter>
  </Card>
);

TutorialCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default TutorialCard;
