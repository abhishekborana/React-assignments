import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Postview from './Postview';
import reportWebVitals from './reportWebVitals';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Postview />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);