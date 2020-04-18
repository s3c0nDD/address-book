import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

export const ROUTES = {
  root: '/',
  settings: '/settings'
};

const Routes = () => {
  return (
    <Switch>
      <Route
        path={ROUTES.root}
        component={MainPage}
        exact
      />
      <Route
        path={ROUTES.settings}
        component={SettingsPage}
      />
      <Route
        component={NotFoundPage}
      />
    </Switch>
  );
};

export default Routes;
