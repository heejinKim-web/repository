import React from "react";
import "./App.css";
import RandomColor from "./components/RandomColor";
import Candles from "./components/Candles";

const App = () => {
  return (
    <div>
      <RandomColor />
      <Candles />
    </div>
  );
};

export default App;
