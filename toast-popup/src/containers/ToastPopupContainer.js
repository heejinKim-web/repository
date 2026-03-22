import React from "react";
import { connect } from "react-redux";
import ToastPopup from "../components/ToastPopup";
import { open, close } from "../modules/toastpopup";

const ToastPopupContainer = ({ isOpen, type, data, open, close }) => {
  return (
    <ToastPopup
      isOpen={isOpen}
      type={type}
      data={data}
      onOpen={open}
      onClose={close}
    />
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.toastpopup.isOpen,
  type: state.toastpopup.type,
  data: state.toastpopup.data,
});

const mapDispatchToProps = (dispatch) => ({
  open: () => {
    dispatch(open());
  },
  close: () => {
    dispatch(close());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToastPopupContainer);
