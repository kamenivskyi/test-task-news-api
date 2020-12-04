import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const Routes = () => {
  const { isLoggedIn } = useSelector(({ authData }) => authData);

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/news" component={News} exact />
      <ProtectedRoute
        path="/profile"
        component={Profile}
        isAuthenticated={isLoggedIn}
        redirectTo="/login"
        exact
      />
      <ProtectedRoute
        path="/login"
        component={Login}
        isAuthenticated={!isLoggedIn}
        redirectTo="/profile"
        exact
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
