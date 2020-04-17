import React from 'react';
import { Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

export const ROUTES = {
  root: '/',
  settings: '/settings'
};

const Routes = () => {
  return (
    <CacheSwitch>
      <CacheRoute
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
    </CacheSwitch>
  );
};

export default Routes;
