import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Forecast from './components/Forecast/Forecast';
import Details from './components/Details/Details';

export default function() {
  return (
    <Switch>
      <Route
        component={Home}
        exact
        path={'/'}
      />
      <Route
        component={Forecast}
        path={'/forecast/:city'}
      />
      <Route
        component={Details}
        path={'/details/:city/:id'}
      />
    </Switch>
  );
}
