import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
    );
  }
}
