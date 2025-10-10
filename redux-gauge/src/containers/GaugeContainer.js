import React from "react";
import { connect } from "react-redux";
import Gauge from "../components/Gauge";
import { mothlite, guapo, miracle, dos } from "../modules/musicchoose";

const GaugeContainer = ({ percent, mothlite, guapo, miracle, dos }) => {
  return (
    <Gauge
      percent={percent}
      onMothlite={mothlite}
      onGuapo={guapo}
      onMiracle={miracle}
      onDos={dos}
    />
  );
};

const mapStateToProps = (state) => ({
  percent: state.musicchoose.percent,
});

const mapDispatchToProps = (dispatch) => ({
  mothlite: () => {
    dispatch(mothlite());
  },
  guapo: () => {
    dispatch(guapo());
  },
  miracle: () => {
    dispatch(miracle());
  },
  dos: () => {
    dispatch(dos());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GaugeContainer);
