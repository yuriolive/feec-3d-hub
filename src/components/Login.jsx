import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle, Button, Form, FormGroup, FormFeedback, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import validator from 'validator';
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
        email: {
          value: '',
          error: false,
        },
        password: {
          value: '',
          error: false,
        },
      },
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleEmailInput(event) {
    if (validator.isEmail(event.target.value)) {
      this.setState({
        user: {
          ...this.state.user,
          email: {
            value: event.target.value,
            error: false,
          },
        },
      });
    } else {
      this.setState({
        user: {
          ...this.state.user,
          email: {
            value: event.target.value,
            error: true,
          },
        },
      });
    }
  }

  handlePasswordInput(event) {
    if (validator.matches(
      event.target.value,
      /^(?=.*[0-9])(?=.*[!_@#$%^&*])(?=.*[a-zA-Z])[a-zA-Z0-9!_@#$%^&*]{6,}$/g)) { // Valid password
      this.setState({
        user: {
          ...this.state.user,
          password: {
            value: event.target.value,
            error: false,
          },
        },
      });
    } else { // Invalid password
      this.setState({
        user: {
          ...this.state.user,
          password: {
            value: event.target.value,
            error: true,
          },
        },
      });
    }
  }

  render() {
    return (
      <div className="container d-flex justify-content-center mt-3" style={{ maxWidth: '400px' }}>
        <Card block>
          <CardTitle>Entrar</CardTitle>
          <Form onSubmit={(e) => {
            e.preventDefault();
            this.props.emailLogin(this.state.user);
          }}
          >
            <FormGroup color={this.state.user.email.error ? 'danger' : null}>
              <Label for="exampleEmail">E-mail</Label>
              <Input
                value={this.state.user.email.value}
                onChange={this.handleEmailInput}
                state={this.state.user.email.error ? 'danger' : null}
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
              />
              { this.state.user.email.error ?
                <FormFeedback>Por favor digite um e-mail válido!</FormFeedback> : undefined }
            </FormGroup>
            <FormGroup color={this.state.user.password.error ? 'danger' : null}>
              <Label for="examplePassword">Senha</Label>
              <Input
                value={this.state.user.password.value}
                onChange={this.handlePasswordInput}
                state={this.state.user.password.error ? 'danger' : null}
                type="password"
                name="password"
                placeholder="Digite sua senha"
              />
              { this.state.user.password.error ?
                <FormFeedback>
                  A senha deve ter mais de 6 caracteres{' '}
                  e ao menos 1 letra, 1 número e 1 caracter especial!
                </FormFeedback> : undefined }
              <small>
                <Link to="/resetar-senha">Esqueceu sua senha?</Link>
              </small>
            </FormGroup>
            <Button
              type="submit"
              color="primary"
              disabled={
                this.props.loading
                || this.state.user.email.error
                || this.state.user.password.error
                || this.state.user.email.value === ''
                || this.state.user.password.value === ''
              }
            >{ this.props.loading === true ? (<DisabledLoginButton />) : ('Entrar')}</Button>
          </Form>
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
const mapStateToProps = state => ({ loading: state.user.loginLoading });

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
const matchDispatchToProps = dispatch => bindActionCreators({ emailLogin }, dispatch);

// We don't want to return the plain UserList (component) anymore, 
// we want to return the smart Container
// UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Login);
