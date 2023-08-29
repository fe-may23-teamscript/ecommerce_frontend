import React from 'react';
import './App.scss';
import './styles/index.scss';
import { Router } from './providers/router/Router';
import { Layout } from '../components/Layout';

function App() {
  return (
    <div className="App dark">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
