import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => (
  <button onClick={props.action} className="btn">
    {props.text}
  </button>
);

Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
