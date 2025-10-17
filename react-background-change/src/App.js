import React from "react";
import "./App.css";
import RandomColor from "./components/RandomColor";
import Candles from "./components/Candles";
import ColorChange from "./components/ColorChange";
import Popup from "./components/Popup";
import TodoApp from "./components/TodoApp";
import CarLight from "./components/CarLight";

const App = () => {
  return (
    <div>
      <RandomColor />
      <Candles />
      <ColorChange />
      <Popup />
      <TodoApp />
      <CarLight />
    </div>
  );
};

export default App;
