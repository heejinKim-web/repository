import React from "react";

const Gauge = ({ percent, onMothlite, onGuapo, onMiracle, onDos }) => {
  return (
    <div className="container">
      <h1>음악 선호도</h1>
      <div className="inner_container">
        <div className="gauge" style={{ width: percent + "%" }}>
          <p className="gauge_text">{percent}%</p>
        </div>
      </div>
      <div className="Buttons">
        <button className="button" onClick={onMothlite}>
          Mothlite
        </button>
        <button className="button" onClick={onGuapo}>
          Guapo
        </button>
        <button className="button" onClick={onMiracle}>
          Miracle
        </button>
        <button className="button" onClick={onDos}>
          DOS
        </button>
      </div>
    </div>
  );
};

export default Gauge;
