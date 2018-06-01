import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app';
import WebFont from 'webfontloader';
import 'sanitize.css/sanitize.css';
import './index.css';

WebFont.load({
  google: {
    families: ['notosanskr', 'Roboto:300,400,500', 'Material+Icons']
  }
});

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App back={history.goBack} />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
