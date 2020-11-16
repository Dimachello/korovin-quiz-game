import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./QuestionsArea.css";
import Answer from "../../elements/HexagonContainer/HexagonContainer";
import Question from "../../elements/Question/Question";
import config from "../../utils/config";

const QuestionsArea = ({
  updateCount,
  showScore,
  questionNumber,
  getQuestionNumber,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(questionNumber);
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [isChecked, setChecked] = useState(false);

  const answerSetHandler = (event) => {
    if (currentAnswer.includes(event.target.innerText)) {
    } else {
      setCurrentAnswer((prevState) => [...prevState, event.target.innerText]);
    }
  };

  useEffect(() => {
    if (currentAnswer.length > 0) {
      if (
        config.questions[currentQuestion].correct.length ===
        currentAnswer.length
      ) {
        let isSameValues = false;
        config.questions[currentQuestion].correct.forEach((answer) => {
          const variant = currentAnswer.indexOf(answer);
          if (answer === currentAnswer[variant]) {
            isSameValues = true;
          }
        });
        if (isSameValues) {
          setChecked(isSameValues);
          getQuestionNumber(currentQuestion + 1);
        } else {
          showScore();
        }
      }
    }
  });

  useEffect(() => {
    if (isChecked) {
      updateCount();
      setCurrentAnswer([]);
      setCurrentQuestion((prevState) => prevState + 1);
      setChecked(false);
    }
  });

  return (
    <div className="QuestionsAreaContainer">
      {currentQuestion <= config.questions.length - 1 ? (
        <>
          <Question question={config.questions[currentQuestion].question} />
          <div className="Answers">
            {config.questions[currentQuestion].answers.map((variant, idx) => (
              <Answer
                key={idx + 1}
                text={variant}
                action={(event) => {
                  answerSetHandler(event);
                }}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

QuestionsArea.propTypes = {
  updateCount: PropTypes.func,
  showScore: PropTypes.func,
  questionNumber: PropTypes.number,
  getQuestionNumber: PropTypes.func,
};

export default QuestionsArea;
