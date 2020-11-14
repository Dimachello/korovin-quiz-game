import React from "react";
import {useHistory} from 'react-router-dom';
import './WelcomeWindow.css';
import Logo from '../../elements/logo/Logo';
import Button from '../../elements/button/Button';

const WelcomeWindow = () => {
    const history = useHistory();

  const quizRedirectHandler = () => {
      history.push('/quiz');
  }

  return (
    <div className="WelcomeWindowWrapper"> 
        <div className="WelcomeWindowContainer">
            <Logo />
            <article>
                <h1>Who wants to be a millionaire?</h1>
                <Button text="Start" action={quizRedirectHandler}/>
            </article>
        </div>
    </div>
  );
};

export default WelcomeWindow;
