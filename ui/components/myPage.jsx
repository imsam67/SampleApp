import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Components
import App from '../app';
import MyPageUi from './myPageUi.jsx'

// Store
import appStore from '../../store/appStore';

const store = appStore();

render (
    <Provider store={store}>
        <App>
            <MyPageUi />
        </App>
    </Provider>, document.getElementById('app')
)