import { createBrowserHistory } from 'history';
import * as React from "react";
import { Link, Router } from "react-router-dom";
import RouterContent from "./RouterContent";

import "./App.css";
import logo from "./logo.svg";

const browserHistory = createBrowserHistory();

class App extends React.Component {
  public render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <Link to="/">Home</Link> / <Link to="/about/">About</Link> / <Link to="/users/">Users</Link>
            </p>
          </header>
          <RouterContent />
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
