import React from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import { sovran, bloodinside, spritualinstinct, close } from "../modules/modal";

const ModalContainer = ({
  isOpen,
  data,
  id,
  sovran,
  bloodinside,
  spritualinstinct,
  close,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      data={data}
      id={id}
      onSovran={sovran}
      onBloodInside={bloodinside}
      onSpritual={spritualinstinct}
      onClose={close}
    />
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  data: state.modal.data,
  id: state.modal.id,
});

const mapDispatchToProps = (dispatch) => ({
  sovran: () => {
    dispatch(sovran());
  },
  bloodinside: () => {
    dispatch(bloodinside());
  },
  spritualinstinct: () => {
    dispatch(spritualinstinct());
  },
  close: () => {
    dispatch(close());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
