import React from 'react';
import { bindActionCreators } from 'redux';
// import { Container, Card, CardTitle, CardBlock, CardSubtitle } from 'reactstrap';
import { Container, Card, CardHeader, CardBlock, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import { getTutorial } from '../actions/index';

/*
  <Card>
    <CardBlock>
      <CardTitle>{this.props.tutorial.title}</CardTitle>
      <CardSubtitle>Adicionado em {moment(this.props.tutorial.date).format('LL')}</CardSubtitle>
      <ReactMarkdown
        escapeHtml
        source={this.state.tutorial.content.value}
      />
    </CardBlock>
  </Card>
*/

moment.locale('pt-BR');

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.props.getTutorial(this.props.match.params.id);
  }

  render() {
    console.log(this.props.tutorial);

    return (
      <div>
        <Container className="mt-3">
          <Card className="tutorial-card">
            <CardHeader>
              <CardTitle tag="h3">{this.props.tutorial.title}</CardTitle>
              <p>Adicionado em {moment(this.props.tutorial.date).format('LL')}</p>
            </CardHeader>
            <CardBlock>
              <ReactMarkdown source={this.props.tutorial.content} />
            </CardBlock>
          </Card>
        </Container>
      </div>
    );
  }
}

Tutorial.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  tutorial: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  getTutorial: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tutorial: state.tutorials.currentValue,
});

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ getTutorial }, dispatch);

// We don't want to return the plain UserList (component) anymore, 
// we want to return the smart Container
// UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Tutorial);
