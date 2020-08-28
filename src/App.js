import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cat from "./components/Cat.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/catfact" render={(props) => <Cat {...props} />} />
      </Switch>
    </div>
  );
}
export default App;
