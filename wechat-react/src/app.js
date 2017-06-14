import React from 'react';
import { useStrict } from 'mobx';
import ReactDOM from 'react-dom';
import App from './main';

useStrict(true);

const MOUNT_NODE = document.getElementById('app');

let render = () => {
    const routes = require('./router/index').default();

    ReactDOM.render(
        <App routes={routes} />,
        MOUNT_NODE
    )
};

render();