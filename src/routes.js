import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/news' component={News} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Routes;
