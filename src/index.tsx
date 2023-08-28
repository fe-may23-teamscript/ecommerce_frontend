import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/reset.scss';
import App from './app/App';
import reportWebVitals from './app/types/reportWebVitals';
import './app/styles/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
