import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBar from "./components/AppBar";
import About from "./components/About";
import Data from "./components/Data";

const App = () => (
  <Container fluid className="px-0">
    <AppBar />
    <Router>
      <Switch>
        <Route path="/data">
          <Data />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Data />
        </Route>
      </Switch>
    </Router>
  </Container>
);

export default App;
