import React from "react";
import PropTypes from "prop-types";

export const Btn = ({ props, clickHandler, styles }) => {

  return (
    <button
      className={`btn ${styles}`}
      onClick={()=>clickHandler(props)}
    >
      {props}
    </button>
  );
};
//validation
Btn.propTypes = {
  clickHandler: PropTypes.func.isRequired
};