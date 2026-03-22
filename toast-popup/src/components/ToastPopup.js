import React from "react";
import ToastPopupModal from "./ToastPopupModal";

const ToastPopup = ({ isOpen, type, data, onOpen, onClose }) => {
  const handlePopup = () => {
    onOpen();
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const closePopup = () => {
    onClose();
  };

  return (
    <>
      <div className="button-container">
        <button className="toast-button" onClick={handlePopup}>
          Toast
        </button>
      </div>
      {isOpen === true && (
        <ToastPopupModal closePopup={closePopup} type={type} data={data} />
      )}
    </>
  );
};

export default ToastPopup;
