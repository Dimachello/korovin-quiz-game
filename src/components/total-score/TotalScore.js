import React from "react";
import {useHistory} from 'react-router-dom';
import "./TotalScore.css";
import Logo from "../../elements/logo/Logo";
import Button from "../../elements/button/Button";
import config from '../../utils/config';

const TotalScore = ({answersCount}) => {
  const history = useHistory();

  const tryAgainHandler = () => {
      history.push('/');
  }

  return (
    <div className="TotalScoreWrapper">
      <div className="TotalScoreContainer">
        <Logo />
        <article>
          <h1>Total score:</h1>
          <p>{answersCount > 0 ? config.bounty[answersCount-1] : 0}$ earned</p>
          <Button text="Try again" action={tryAgainHandler} />
        </article>
      </div>
    </div>
  );
};

export default TotalScore;
