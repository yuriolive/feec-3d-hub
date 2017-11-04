import React from 'react';
import { Button, Nav, NavItem, NavLink, NavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import User from '../classes/User';
import { logout } from '../actions/index';

class AppNavbarLogin extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    if (this.props.loggedIn === true) {
      return (
        <Nav navbar>
          <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              { this.props.user.photoURL !== null ? (
                <img
                  alt="user"
                  src={this.props.user.photoURL}
                  className="rounded-circle mr-1"
                  style={{ height: 21, width: 21 }}
                />
              ) : (
                <i className="fa fa-user-circle fa-lg mr-1" aria-hidden="true" />
              ) }
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={Link} to="/" onClick={() => this.props.logout()}>
                <i className="fa fa-sign-out mr-2" aria-hidden="true" />Sair
              </DropdownItem>
            </DropdownMenu>
          </NavDropdown>
        </Nav>);
    }

    return (
      <Nav navbar>
        <NavItem>
          <NavLink tag={Link} to="/entrar">Entrar</NavLink>
        </NavItem>
        <Button tag={Link} to="/registrar" outline color="primary" className="ml-3">
          Cadastrar-se
        </Button>
      </Nav>);
  }
}

/* 
            <DropdownMenu right>
              <DropdownItem header>
                { this.props.displayName != null ? this.props.displayName : '' }
              </DropdownItem>
              <DropdownItem tag={Link} to="/meus-cursos">
                <i className="fa fa-university mr-2" aria-hidden="true" />Meus cursos
              </DropdownItem>
              <DropdownItem tag={Link} to="/meus-tutoriais">
                <i className="fa fa-leanpub mr-2" aria-hidden="true" />Meus tutoriais
              </DropdownItem>
              <DropdownItem tag={Link} to="/meus-projetos">
                <i className="fa fa-book mr-2" aria-hidden="true" />Meus projetos
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/perfil">
                <i className="fa fa-cog mr-2" aria-hidden="true" />Perfil
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/" onClick={() => this.props.logout()}>
                <i className="fa fa-sign-out mr-2" aria-hidden="true" />Sair
              </DropdownItem>
            </DropdownMenu>
*/

AppNavbarLogin.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ loggedIn: state.user.loggedIn, user: state.user.user });

const matchDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(AppNavbarLogin);
