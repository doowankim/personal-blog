import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "../Home"
import Main from "../Main"
import Post from "../Post"
import Profile from "../Profile"
import Board from "../Board"

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/main" component={Main} />
          <Route path="/post" component={Post} />
          <Route path="/profile" component={Profile} />
          <Route path="/board" component={Board} />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default Router
