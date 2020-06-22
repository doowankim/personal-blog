import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from '../Home';
import Main from '../Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <div className="container">
        <Route path="/main" component={Main} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
