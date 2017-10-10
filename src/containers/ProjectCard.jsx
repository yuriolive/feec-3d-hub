import React from 'react';
import { Card, CardImg, CardBlock,
  CardTitle, CardLink, CardFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// <CardSubtitle>adicionado por {props.author.name}</CardSubtitle>
//       <CardText className="mt-3">{props.subtitle}</CardText>

const ProjectCard = props => (
  <Card className="mt-3">
    <CardImg top width="100%" src={props.image} alt="Card image cap" />
    <CardBlock>
      <CardTitle>{props.title}</CardTitle>
    </CardBlock>
    <CardFooter>
      <CardLink tag={Link} to={props.url} className="mr-auto">Ver Projeto</CardLink>
    </CardFooter>
  </Card>
);

ProjectCard.propTypes = {
  image: PropTypes.shape({
    thubmnail: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProjectCard;
