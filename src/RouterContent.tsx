import * as React from "react";
import { Route } from "react-router-dom";
import About from "~/views/About";
import Index from "~/views/Index";
import Users from "~/views/Users";

export default () => (
  <div>
    <Route path="/" exact={true} component={Index} />
    <Route path="/about/" component={About} />
    <Route path="/users/" component={Users} />
  </div>
);
