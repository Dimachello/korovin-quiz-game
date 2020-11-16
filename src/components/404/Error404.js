import React from "react";
import PropTypes from "prop-types";
import "./Error404.css";
import Button from "../../elements/button/Button";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  const history = useHistory();

  const homeRedirect = () => {
    history.replace(`/`);
  };

  return (
    <div className="ErrorContainer">
      <h1>404</h1>
      <p>Something went wrong</p>
      <Button text={"Go to main page"} action={homeRedirect} />
    </div>
  );
};

Error404.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};

export default Error404;
