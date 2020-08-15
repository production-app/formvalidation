import React from "react";
import "./App.css";
import Main from "./Main";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/user" component={User} /> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
