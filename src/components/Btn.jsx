import React from "react";
import PropTypes from "prop-types";

export const Btn = ({ props, clickHandler, styles, theme }) => {

  return (
    <button
      className={`btn btn-${theme} ${styles}`}
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