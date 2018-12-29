import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import App from "./App";
import reducer from "./reducer";
import registerServiceWorker from "./registerServiceWorker";

const browserHistory = createBrowserHistory();
const store = createStore(reducer, {});

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
