import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={browserHistory}><App /></Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
