import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/reset.scss';
import App from './app/App';
import reportWebVitals from './app/types/reportWebVitals';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/providers/store/store';
import ErrorBoundary from './app/providers/ErrorBoundary/ErrorBoundary';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/ecommerce_frontend'}>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
