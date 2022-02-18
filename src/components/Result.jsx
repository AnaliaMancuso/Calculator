import React from "react";
import PropTypes from "prop-types";

const Result = ({ value, theme }) => {
  return (
    <>
      {value.length < 19 ? (
        <h4 className={`result result-${theme}`}>{value}</h4>
      ) : (
        <h4 className={`result-error result-error-${theme}`}>Oops! too large value</h4>
      )}
    </>
  );
};

Result.propTypes = {
  value: PropTypes.string.isRequired,
};
Result.defaultProps = {
  value: "0",
};
export default Result;
