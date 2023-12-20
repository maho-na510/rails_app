// Entry point for the build script in your package.json
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