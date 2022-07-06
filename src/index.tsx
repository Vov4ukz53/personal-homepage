import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './core/App/App';
import reportWebVitals from './reportWebVitals';
import store from "./core/App/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
