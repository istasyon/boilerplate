import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  renderAuthButton() {
    const { isAuth } = this.props;
    if (isAuth) {
      return (
        <li onClick={() => this.props.logout()}>Logout</li>
      );
    }
    return (
      <li onClick={() => this.props.login()}>Login</li>
    );
  }

  render() {
    return (
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {this.renderAuthButton()}
      </nav>
    );
  }
}

export default Navbar;
