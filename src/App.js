import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { routes } from 'consts/routing';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
);

export { App };
