import { useEffect } from "react";
import "./App.css";

const Popup = ({ ref, isPopupOpen, setIsPopupOpen }) => {
  const refFocus = () => {
    if (isPopupOpen) {
      ref.current.focus();
    }
  };

  useEffect(() => {
    refFocus();
  }, [isPopupOpen]);

  const onClose = () => {
    setIsPopupOpen(false);
  };
  return (
    <div
      className="popup_background"
      style={{ display: isPopupOpen ? "block" : "none" }}
    >
      <div className="popup_body">
        <div className="popup_content">
          <div className="popup_close_button" onClick={onClose}>
            X
          </div>
          <div className="popup_form">
            <h1>내용을 입력해주세요.</h1>
            <textarea ref={ref} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
