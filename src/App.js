import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/main" exact component={() => <Main />} />
          <Route path="/profile" exact component={() => <Profile />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
