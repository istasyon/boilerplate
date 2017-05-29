import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login, logout } from '../actions';
import Navbar from '../components/Navbar';

class NavbarContainer extends Component {
  render() {
    return (
      <Navbar {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  const { isAuth } = state.auth;

  return {
    isAuth
  }
}

export default connect(mapStateToProps, { login, logout })(NavbarContainer);
