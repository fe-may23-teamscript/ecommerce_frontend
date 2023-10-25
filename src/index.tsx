import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './app/styles/reset.scss';
import App from './app/App';
import reportWebVitals from './app/types/reportWebVitals';
import './app/styles/index.scss';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/providers/store/store';
import ErrorBoundary from './app/providers/ErrorBoundary/ErrorBoundary';
import ThemeProvider from './app/providers/Theme/ThemeProvider';
import './localization/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="best-auth-ever.eu.auth0.com"
      clientId="TZJRcUWEtsNYOXhl8wicSceczR1sUTa4"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <HashRouter>
        <Provider store={store}>
          <ErrorBoundary>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ErrorBoundary>
        </Provider>
      </HashRouter>
    </Auth0Provider>
  </React.StrictMode>,
);

reportWebVitals();
