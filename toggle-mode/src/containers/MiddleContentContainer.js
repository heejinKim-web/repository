import React from "react";
import { connect } from "react-redux";
import MiddleContents from "../components/MiddleContents";
import { light, dark } from "../modules/toggle";

const MiddleContentContainer = ({ mode, light, dark }) => {
  return <MiddleContents mode={mode} onLight={light} onDark={dark} />;
};

const mapStateToProps = (state) => ({
  mode: state.toggle.mode,
});

const mapDispatchToProps = (dispatch) => ({
  light: () => {
    dispatch(light());
  },
  dark: () => {
    dispatch(dark());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MiddleContentContainer);
