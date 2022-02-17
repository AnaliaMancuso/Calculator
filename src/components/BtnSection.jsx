import React from "react";
import { Btn } from "./Btn";
import PropTypes from "prop-types";

const BtnSection = ({ db, clickHandler, sectionStyle, btnStyle }) => {
  return (
    <section className={sectionStyle}>
      {Object.values(db).map((item) => (
        <Btn
          styles={btnStyle}
          key={item}
          props={item}
          clickHandler={clickHandler}
        />
      ))}
    </section>
  );
};

BtnSection.propTypes = {
  db: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired
};
export default BtnSection;
