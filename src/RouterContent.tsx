import * as React from "react";
import { Route } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

export default () => (
  <div>
    <Route path="/" exact={true} component={Index} />
    <Route path="/about/" component={About} />
    <Route path="/users/" component={Users} />
  </div>
);
