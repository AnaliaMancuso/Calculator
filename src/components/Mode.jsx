import React from "react";

const Mode = ({ currentMode, handleTheme }) => {
  return (
    <section className="section-theme">
      {currentMode !== "light" ? (
        <button className="btn-mode-light" value="light" onClick={handleTheme}><i class="fa fa-sun-o" aria-hidden="true"></i></button>
      ) : (
        <button className="btn-mode-dark" value="dark" onClick={handleTheme}><i class="fa fa-moon-o" aria-hidden="true"></i></button>
      )}
    </section>
  );
};

export default Mode;
