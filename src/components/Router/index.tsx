import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../Home';
import Main from '../Main';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;
