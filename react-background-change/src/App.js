import React from "react";
import "./App.css";
import RandomColor from "./components/RandomColor";
import Candles from "./components/Candles";
import ColorChange from "./components/ColorChange";
import Popup from "./components/Popup";

const App = () => {
  return (
    <div>
      <RandomColor />
      <Candles />
      <ColorChange />
      <Popup />
    </div>
  );
};

export default App;
