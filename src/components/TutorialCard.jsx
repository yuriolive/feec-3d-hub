import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, CardLink } from 'reactstrap';
import PropTypes from 'prop-types';


const TutorialCard = props => (
  <Card>
    <CardImg top width="100%" src={props.img.thubmnail} alt="Card image cap" />
    <CardBlock>
      <CardTitle>{props.title}</CardTitle>
      <CardSubtitle>adicionado por {props.author.name}</CardSubtitle>
      <CardText className="mt-3">{props.description}</CardText>
      <CardLink href={props.url} className="mr-auto">Começar</CardLink>
      <span className="float-right">
        <small className="text-muted">Last updated 3 mins ago</small>
      </span>
    </CardBlock>
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
