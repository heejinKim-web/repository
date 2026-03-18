import React, { useState } from "react";
import classnames from "classnames";

const CarMove = () => {
  const [forward, setForward] = useState(false);
  const [backward, setBackward] = useState(false);

  const handleForward = () => {
    setForward(true);
    setBackward(false);
  };

  const handleBackward = () => {
    setForward(false);
    setBackward(true);
  };

  const handleAct = () => {
    setForward(false);
    setBackward(false);
  };

  return (
    <>
      <div className="car-container">
        <div
          className={classnames(
            "car",
            forward === true && "forward",
            backward === true && "backward",
          )}
        >
          <img src="/img/car.png" alt="car" />
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={handleForward}>전진</button>
        <button onClick={handleAct}>원래위치로</button>
        <button onClick={handleBackward}>후진</button>
      </div>
    </>
  );
};

export default CarMove;
