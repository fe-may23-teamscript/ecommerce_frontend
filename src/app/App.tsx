import React from 'react';
import './App.scss';
import './styles/index.scss';
import Router from './providers/Router/Router';
import { Layout } from '../components/Layout';
import { useTheme } from './providers/Theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme === 'dark' ? 'dark' : 'light'}`}>
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Router />
      </Layout>
    </div>
  );
};

export default App;
