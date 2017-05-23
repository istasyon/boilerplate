import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Settings extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    );
  }
}
