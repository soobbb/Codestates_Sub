/* import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// 1
import { Provider } from 'react-redux';
// 2
import { legacy_createStore as createStore } from 'redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const reducer = () => {};

// 4
const store = createStore(reducer);

root.render(
  // 3
  <Provider store={store}>
  <App />
  </Provider>
);
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// 1
import { Provider } from 'react-redux';
// 2
import { legacy_createStore as createStore } from 'redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const reducer = () => {};

// 4
const store = createStore(reducer);

root.render(
  // 3
  <Provider store={store}>
  <App />
  </Provider>
);

