import React from "react";
import classnames from "classnames";

const Modal = ({
  isOpen,
  data,
  id,
  onSovran,
  onBloodInside,
  onSpritual,
  onClose,
}) => {
  return (
    <div className={classnames("modal-background", isOpen === true && "open")}>
      <div className="modal-container">
        <div className="modal-relative">
          <div className="modal-content">
            <p>{data}</p>
          </div>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
