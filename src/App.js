import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import WelcomeWindow from "./components/WelcomeWindow";
import QuizPanel from "./components/QuizPanel";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={WelcomeWindow} />
          <Route path="/quiz" component={QuizPanel} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
