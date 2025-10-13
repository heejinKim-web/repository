import React, { useState } from "react";

const PopupBody = ({ open, setOpen }) => {
  const closePopup = () => {
    setOpen(false);
  };

  return (
    <div
      className="popup_background"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="popup_relative_background">
        <div className="popup_absolute">
          <div className="popup_relative">
            <div className="popup_body">
              <p>예시 팝업입니다.</p>
            </div>
            <button className="popup_close" onClick={closePopup}>
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Popup = () => {
  const [open, setOpen] = useState(false);
  const openPopup = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="popup_button container">
        <button className="popup_open" onClick={openPopup}>
          팝업을 열어주세요.
        </button>
      </div>
      <PopupBody open={open} setOpen={setOpen} />
    </>
  );
};

export default Popup;
