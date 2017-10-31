import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbarLogin from './AppNavbarLogin';

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
        <Navbar color="faded" className="pl-0 pr-0" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand tag={Link} to="/">FEEC 3D Hub</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/tutoriais">Tutoriais</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projetos">Projetos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://143.106.50.132:3344/" target="_blank">Impressora</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://feec3dhub.freeforums.net/" target="_blank">Fórum</NavLink>
              </NavItem>
            </Nav>
            <AppNavbarLogin />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
