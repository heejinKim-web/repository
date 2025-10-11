import React, { useState } from "react";

const CandleLight = () => {
  const [light, setLight] = useState(false);
  const lightTheCandle = () => {
    if (light === true) {
      setLight(false);
    } else {
      setLight(true);
    }
  };

  return (
    <div className="candle" onClick={lightTheCandle}>
      <img
        src={light ? "/img/candle_on.png" : "/img/candle_off.png"}
        alt="candle"
      />
    </div>
  );
};

const Candles = () => {
  return (
    <div className="candle_box">
      <CandleLight />
      <CandleLight />
      <CandleLight />
    </div>
  );
};

export default Candles;
