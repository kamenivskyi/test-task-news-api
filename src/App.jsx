import React from 'react';

import Routes from './routes';
import Header from './components/Header/Header';

import './App.css';

const App = () => (
  <>
    <Header />
    <div className='container py-3'>
      <Routes />
    </div>
  </>
);

export default App;
