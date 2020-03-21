import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import News from './pages/News/News';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/news' component={News} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/login' component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
