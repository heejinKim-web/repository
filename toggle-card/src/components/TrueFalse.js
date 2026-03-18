import React, { useState } from "react";
import classnames from "classnames";

const TrueFalse = () => {
  const [text, setText] = useState(false);

  const settingText = (e) => {
    if (e === "한얼이") {
      setText(true);
    } else {
      setText(false);
    }
  };

  const trueConditioner = text ? "진실" : "거짓";

  return (
    <div className="text-container">
      <input
        type="text"
        className={classnames("input", text === true && "true")}
        onChange={(e) => settingText(e.target.value)}
      />
      <p
        className={classnames(
          "tfconditioner",
          text === true ? "true" : "false",
        )}
      >
        {trueConditioner}
      </p>
    </div>
  );
};

export default TrueFalse;
