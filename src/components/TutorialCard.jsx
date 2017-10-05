import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, CardLink, CardFooter } from 'reactstrap';
import PropTypes from 'prop-types';


const TutorialCard = props => (
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
);

TutorialCard.propTypes = {
  img: PropTypes.shape({
    thubmnail: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TutorialCard;
