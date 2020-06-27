import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "../Home"
import Main from "../Main"
import Profile from "../Profile"
import Portfolio from "../Portfolio"

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
          <Route path="/profile" component={Profile} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default Router
