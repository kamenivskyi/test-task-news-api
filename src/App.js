import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from './redux/store';

import Routes from './routes';

import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Header />
        <div className='container py-3'>
          <Routes />
        </div>
      </Provider>
    </HashRouter>
  );
};

export default App;
