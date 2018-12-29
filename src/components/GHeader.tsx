import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

export default () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      <Link to="/">Home</Link> / <Link to="/about/">About</Link> / <Link to="/users/">Users</Link>
    </p>
  </header>
);
