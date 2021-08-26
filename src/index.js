import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './HelloWorld';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HelloWorld/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
