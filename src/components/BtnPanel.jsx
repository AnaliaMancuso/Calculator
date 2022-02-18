import React from "react";
import BtnSection from "./BtnSection";
import data from "../data.json";
import PropTypes from "prop-types";


const BtnPanel = ({ theme,fnNumber, fnClear, fnOperation, fnDelete, fnResult }) => {
  const { numbers, operations, clear, del, equal } = data;
  return (
    <div className={`grid-btn grid-btn-${theme}`}>
      <BtnSection
        db={numbers}
        clickHandler={fnNumber}
        sectionStyle={"btn-numbers"}
        btnStyle={`btn-numbers__button-${theme}`}
        theme={theme}
      />
      <BtnSection
        db={operations}
        clickHandler={fnOperation}
        sectionStyle={"btn-operations"}
        btnStyle={`btn-operations__button-${theme}`}
        theme={theme}

      />
      <section className="btn-actions">
        <BtnSection
          db={del}
          clickHandler={fnDelete}
          btnStyle={`btn-clear__button-${theme}`} 
        theme={theme}

        />
        <BtnSection
          db={clear}
          clickHandler={fnClear}
          btnStyle={`btn-clear__button-${theme}`} 
        theme={theme}

        />
        <BtnSection
          db={equal}
          clickHandler={fnResult}
          btnStyle={`btn-clear__button-${theme}`} 
        theme={theme}

        />
      </section>
    </div>
  );
};
BtnPanel.propTypes = {
  fnNumber: PropTypes.func.isRequired,
  fnClear: PropTypes.func.isRequired,
  fnOperation: PropTypes.func.isRequired,
  fnDelete: PropTypes.func.isRequired,
  fnResult: PropTypes.func.isRequired
};
export default BtnPanel;
