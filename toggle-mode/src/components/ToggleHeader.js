import React from "react";
import classnames from "classnames";

const ToggleHeader = ({ mode, onLight, onDark }) => {
  const handleToggle = () => {
    if (mode === true) {
      onLight();
    } else {
      onDark();
    }
  };
  return (
    <>
      <header className={classnames("header", mode === true && "dark")}>
        <div className="container">
          <div className="toggle-button" onClick={handleToggle}>
            <div className="toggle-button-inner"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ToggleHeader;
