import React from 'react';
import Flux from "react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Groups from "./views/Groups.jsx";
import Events from "./views/Events.jsx";

export default class Layout extends Flux.View {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/groups:id" component={Groups} />
              <Route exact path="/events:id" component={Events} />
              <Route render={() => <h1>Not found!</h1>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}