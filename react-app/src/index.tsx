import React from 'react';
import ReactDOM from 'react-dom';

import './config/i18n';

import 'normalize.css';
import './scss/app.scss';

import App from 'app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
