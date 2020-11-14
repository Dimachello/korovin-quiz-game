import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import WelcomeWindow from './components/welcome_window';
import QuizPanel from './components/quiz-panel';
// import TotalScore from './components/total-score/TotalScore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomeWindow} />
          <Route path="/quiz" component={QuizPanel} />
          {/* <Route path="/score" component={TotalScore}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
