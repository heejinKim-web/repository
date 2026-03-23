import React from "react";
import classnames from "classnames";

const ToastPopupModal = ({ closePopup, type, data }) => {
  return (
    <div
      className={classnames(
        "toast-popup",
        type === "toast" && "toast-open",
        type === "alert" && "alert-open",
      )}
    >
      <p>{data}</p>
      <button onClick={closePopup}>&times;</button>
    </div>
  );
};

export default ToastPopupModal;
