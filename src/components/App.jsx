import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../actions/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textValue: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1>To Do s</h1>
        <div className="input-group">
          <input
            type="text"
            value={this.state.textValue}
            onChange={this.handleChange}
            className="form-control"
            placeholder="Add todos..."
          />
          <span className="input-group-btn">
            <button
              type="submit"
              className="btn btn-info"
              onClick={() => this.props.addTodo(this.state.textValue)}
            >Adicionar</button>
          </span>
        </div>
        <ul className="list-group mt-3">
          {
            this.props.todos.map(text => (
              <li className="list-group-item" key={text}>{text}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
const mapStateToProps = state => ({ todos: state.todos });

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ addTodo }, dispatch);

// We don't want to return the plain UserList (component) anymore, 
// we want to return the smart Container
// UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(App);
