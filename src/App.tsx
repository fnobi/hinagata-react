import { createBrowserHistory } from 'history';
import * as React from "react";
import { Link, Route, Router } from "react-router-dom";

import "./App.css";
import logo from "./logo.svg";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

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
          <Route path="/" exact={true} component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
