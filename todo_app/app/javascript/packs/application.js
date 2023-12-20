// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

  if (root) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      root
    );
  }
});