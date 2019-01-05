import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import DefaultLayout from '~/layouts/DefaultLayout';
import reducer from '~/store/reducer';
import { defaultState } from '~/store/state';
import About from '~/views/About';
import Index from '~/views/Index';
import Users from '~/views/Users';

const store = createStore(reducer, defaultState);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <DefaultLayout>
                <Route path="/" exact={true} component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </DefaultLayout>
        </HashRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
