import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Header />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
