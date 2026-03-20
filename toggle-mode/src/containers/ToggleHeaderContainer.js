import React from "react";
import { connect } from "react-redux";
import ToggleHeader from "../components/ToggleHeader";
import { light, dark } from "../modules/toggle";

const ToggleHeaderContainer = ({ mode, light, dark }) => {
  return <ToggleHeader mode={mode} onLight={light} onDark={dark} />;
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
)(ToggleHeaderContainer);
