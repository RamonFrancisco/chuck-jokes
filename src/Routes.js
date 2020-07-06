import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from './components/Loading';

import { ROUTE_HOME, ROUTE_CATEGORY } from './defaults/Routes';

const Home = lazy(() => import('./pages/Home'));
const Jokes = lazy(() => import('./pages/Jokes'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path={ROUTE_HOME} exact component={Home} />
      <Route path={ROUTE_CATEGORY} component={Jokes} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
