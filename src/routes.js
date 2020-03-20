import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/about' component={About} />
      <Route exact path='/results/:query/:page' component={Results} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/profile/bookmarks' component={UserBookmarks} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route component={NotFound} /> */}
    </Switch>
  );
};
export default Routes;
