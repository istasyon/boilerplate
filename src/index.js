import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';

import Router from './Router';
import store from './store';

render(
  <Provider store={store}>
    <Router />
  </Provider>
  , document.getElementById('root'));
