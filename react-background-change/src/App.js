import React from "react";
import "./App.css";
import RandomColor from "./components/RandomColor";
import Candles from "./components/Candles";
import ColorChange from "./components/ColorChange";

const App = () => {
  return (
    <div>
      <RandomColor />
      <Candles />
      <ColorChange />
    </div>
  );
};

export default App;
