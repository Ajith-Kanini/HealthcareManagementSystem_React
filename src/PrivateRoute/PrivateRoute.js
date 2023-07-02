import React from 'react';
import { Route, useHistory } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const history = useHistory();

  if (!isAuthenticated) {
    history.push('/login');
  }

  return <Route {...rest} component={isAuthenticated ? Component : null} />;
};

export default PrivateRoute;
