import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/main" exact component={() => <Main />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
