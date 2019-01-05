import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import DefaultLayout from '~/layouts/DefaultLayout';
import reducer from '~/store/reducer';
import { defaultState } from '~/store/state';

const store = createStore(reducer, defaultState);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <DefaultLayout />
        </HashRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
