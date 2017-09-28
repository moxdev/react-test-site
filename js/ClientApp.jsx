// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

// This is Webpack Hot Module reloading function
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
