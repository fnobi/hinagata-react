import { createBrowserHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer";
import { defaultState } from "./store/state";

const browserHistory = createBrowserHistory();
const store = createStore(reducer, defaultState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
