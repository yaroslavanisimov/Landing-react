import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// react.strictmode start the layout after the rendering

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

