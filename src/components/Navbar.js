import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavbarComponent extends Component {

  renderAuthButton() {
    const { isAuth } = this.props;
    if (isAuth) {
      return (
        <NavItem
          onClick={() => this.props.logout()}
        >
          Logout
        </NavItem>
      );
    }
    return (
      <NavItem
        onClick={() => this.props.login()}
      >
        Login
      </NavItem>
    );
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/settings">
              <NavItem>Settings</NavItem>
            </LinkContainer>
            <LinkContainer to="/profile">
              <NavItem>Profile</NavItem>
            </LinkContainer>
            {this.renderAuthButton()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
