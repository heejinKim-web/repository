import React from "react";
import { connect } from "react-redux";
import AlbumList from "../components/AlbumList";
import { sovran, bloodinside, spritualinstinct, close } from "../modules/modal";

const AlbumListContainer = ({
  isOpen,
  data,
  id,
  sovran,
  bloodinside,
  spritualinstinct,
  close,
}) => {
  return (
    <AlbumList
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumListContainer);
