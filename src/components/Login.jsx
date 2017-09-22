import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { emailLogin } from '../actions/index';

const DisabledLoginButton = () => (
  <span>
    <i className="fa fa-refresh fa-spin fa-fw" /> Efetuando login
  </span>);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: 'email@gmail.com',
        password: 'password',
      },
    };
  }

  render() {
    return (
      <div className="container d-flex justify-content-center mt-3" style={{ maxWidth: '400px' }}>
        <Card block>
          <CardTitle>Entrar</CardTitle>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">E-mail</Label>
              <Input
                value={this.state.user.email}
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Senha</Label>
              <Input
                value={this.state.user.password}
                type="password"
                name="password"
                placeholder="Digite sua senha"
              />
              <small>
                <Link to="/resetar-senha">Esqueceu sua senha?</Link>
              </small>
            </FormGroup>
          </Form>
          <Button
            color="primary"
            onClick={() => this.props.emailLogin(this.state.user)}
            disabled={this.props.loading}
          >{ this.props.loading === true ? (<DisabledLoginButton />) : ('Entrar')}</Button>
        </Card>
      </div>
    );
  }
}

Login.propTypes = {
  emailLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
const mapStateToProps = state => ({ loading: state.login.loading });

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ emailLogin }, dispatch);

// We don't want to return the plain UserList (component) anymore, 
// we want to return the smart Container
// UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Login);
