import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import WelcomeWindow from "./components/welcome_window";
import QuizPanel from "./components/quiz-panel";
import Error404 from "./components/404";

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
