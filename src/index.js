import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from 'react-redux'
import configureStore from "./store";

import './index.css';
import App from './App';

const initialState = {
	locale: navigator.language.split(/[-_]/)[0] || 'en',
	pos: null,
}


const store = configureStore(initialState);

const Root = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
