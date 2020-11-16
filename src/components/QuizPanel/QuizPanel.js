import React, { useState } from "react";
import QuestionsArea from "../QuestionsArea";
import BountyList from "../BountyList";
import TotalScore from "../TotalScore";
import config from "../../utils/config";
import menu from "../../imgs/menu.png";
import "./QuizPanel.css";

const Quizpanel = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswersCount, setAnswersCount] = useState(0);
  const [isShown, setShown] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const getQuestionNumber = (num) => {
    setQuestionNumber(num);
  };

  const countHandler = () => {
    setAnswersCount((prevState) => prevState + 1);
  };

  const showScore = () => {
    setShown(true);
  };

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <div className="QuizPanelWrapper">
      {correctAnswersCount !== config.questions.length && isShown === false ? (
        <div className="QuizPanelContainer">
          <div className="MenuWrapper">
            <img src={menu} alt="menu" className="Menu" onClick={toggleMenu} />
          </div>
          <QuestionsArea
            updateCount={countHandler}
            showScore={showScore}
            questionNumber={questionNumber}
            getQuestionNumber={getQuestionNumber}
          />
          <BountyList
            answersCount={correctAnswersCount}
            toggleMenu={toggleMenu}
            additionalClasses={
              showMenu ? null : "Visible ShowBountyListWrapper"
            }
          />
        </div>
      ) : (
        <TotalScore answersCount={correctAnswersCount} />
      )}
    </div>
  );
};

export default Quizpanel;
