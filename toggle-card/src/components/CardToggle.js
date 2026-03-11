import React, { useState } from "react";
import classnames from "classnames";

const CardToggle = () => {
  const [toggle, setToggle] = useState(false);
  const day = toggle ? "Night" : "Day";

  const handleToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <div className="card-toggle-frame">
      <div
        className={classnames("toggle-button", { toggled: toggle })}
        onClick={handleToggle}
      >
        <div className="toggle-button-inner"></div>
      </div>

      <div className={classnames("card", { "card-toggled": toggle })}>
        <p>{day}</p>
      </div>
    </div>
  );
};

export default CardToggle;
