/* eslint-disable no-unused-vars*/
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './reducers/store';

import App from './components/App';
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
			<App/>
		</ConnectedRouter>
	</Provider>
, document.getElementById('app'));
