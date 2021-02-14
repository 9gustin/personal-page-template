import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from './routes';

function AppRouter() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <Switch>
          {ROUTES.map(({ component: Component, exact, name, path }) => (
            <Route
              component={Component}
              exact={exact && exact}
              key={name}
              path={path}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default AppRouter;
