import React from "react";
import PropTypes from "prop-types";

const Question = (props) => (
  <div className="Question">
    <h1>{props.question}</h1>
  </div>
);

Question.propTypes = {
  question: PropTypes.string,
};

export default Question;
