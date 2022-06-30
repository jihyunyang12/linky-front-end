import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import Links from "../src/links/pages/Links"
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import React from 'react';

function App() {
  return (
      <Router>
        <MainNavigation></MainNavigation>
        <main>
        <Switch>
          <Route path="/" exact>
            <Links />
          </Route>
          <Redirect to="/" />
        </Switch>
        </main>
      </Router>
  );
}

export default App;
