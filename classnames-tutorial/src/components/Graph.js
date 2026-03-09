import React, { useState } from "react";
import classnames from "classnames";

const Graph = () => {
  const [active, setActive] = useState(false);

  const buttonClick = () => {
    if (active === false) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className="graph-container">
      <div className="graph-inner-container">
        <div className={classnames("graph-item", { red: active })}></div>
        <div className={classnames("graph-item", { green: active })}></div>
        <div className={classnames("graph-item", { blue: active })}></div>
        <div className={classnames("graph-item", { yellow: active })}></div>
      </div>
      <button className="graph-button" onClick={buttonClick}>
        시작
      </button>
    </div>
  );
};

export default Graph;
