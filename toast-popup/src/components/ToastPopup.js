import React, { useState } from "react";

const ToastPopup = () => {
  const [active, setActive] = useState(false);

  const handlePopup = () => {
    setActive(true);
    setTimeout(() => {
      setActive(false);
    }, 3000);
  };

  const closePopup = () => {
    setActive(false);
  };

  return (
    <>
      <div className="button-container">
        <button className="toast-button" onClick={handlePopup}>
          Toast
        </button>
      </div>
      {active === true && (
        <div className="toast-popup">
          <p>토스트 팝업을 띄웁니다.</p>
          <button onClick={closePopup}>&times;</button>
        </div>
      )}
    </>
  );
};

export default ToastPopup;
