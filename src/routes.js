import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Login from './pages/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/news' component={News} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Routes;
