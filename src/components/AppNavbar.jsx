import React from 'react';
import { Collapse, Navbar, Button, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import User from '../classes/User';

function AppNavbarUser(props) {
  if (typeof props.user !== 'undefined') {
    return (
      <Nav navbar>
        <img alt="user" src="//placehold.it/40" className="rounded-circle ml-3" />
      </Nav>);
  }

  return (
    <Nav navbar>
      <NavItem>
        <NavLink href="entrar">Entrar</NavLink>
      </NavItem>
      <Link to="/registrar">
        <Button outline color="primary" className="ml-3">
          Registre-se
        </Button>
      </Link>
    </Nav>);
}

export default class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">FEEC 3D Hub</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/cursos">Cursos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tutoriais">Tutoriais</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projetos">Projetos</NavLink>
              </NavItem>
            </Nav>
            <AppNavbarUser user={this.props.user} />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

AppNavbar.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
};

AppNavbarUser.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
};
