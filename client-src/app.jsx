import '../css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';
import App from './components/app';

const div = document.createElement('div');
document.querySelector('body').appendChild(div);

const rootElement = div;

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	rootElement);
