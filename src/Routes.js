import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

/**
 * Route's path config
 * @type {object}
 */
export const ROUTES = {
  root: '/',
  settings: '/settings'
};

/**
 * Application's route config
 */
const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default Routes;
