import React from "react";
import PropTypes from "prop-types";
import "./HexagonContainer.css";

const Answer = ({ text, action, additionalClass }) => {
  const classes = ["button", "gray"];

  if (additionalClass) {
    classes.push(additionalClass);
  }

  return (
    <div className={classes.join(" ")} onClick={action}>
      {text}
    </div>
  );
};

Answer.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
  additionalClass: PropTypes.string,
};

export default Answer;
