'use strict'

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
};

renderApp(App);

//if this exists, the hot loader is enabled
if (module.hot) {
    //Most important file to recharge, the entry of application
    module.hot.accept('./app', () => {
        //Import again the same file and reload the app
        const ReloadApp = require('./app').default;
        renderApp(ReloadApp);
    });
}
