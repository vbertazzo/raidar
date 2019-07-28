import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={() => <h1>404 - Página não encontrada</h1>} />
    </Switch>
  );
}
