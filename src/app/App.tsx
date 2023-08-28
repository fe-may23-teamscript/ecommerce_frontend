import React from 'react';
import './styles/index.scss';
import { Router } from './providers/router/Router';
import { Layout } from '../components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
