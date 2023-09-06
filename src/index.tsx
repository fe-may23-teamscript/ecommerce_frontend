import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/reset.scss';
import App from './app/App';
import reportWebVitals from './app/types/reportWebVitals';
import './app/styles/index.scss';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/providers/store/store';
import ErrorBoundary from './app/providers/ErrorBoundary/ErrorBoundary';
import ThemeProvider from './app/providers/Theme/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);

reportWebVitals();
