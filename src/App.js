import React from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <div className='container py-3'>
        <Routes />
      </div>
    </HashRouter>
  );
};

export default App;
