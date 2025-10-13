import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "red_color":
      return {
        color: "red",
      };
    case "green_color":
      return {
        color: "green",
      };
    case "yellow_color":
      return {
        color: "yellow",
      };
    default:
      return state;
  }
}

const initialState = {
  color: "red",
};

const ColorChange = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function putRed() {
    dispatch({ type: "red_color" });
  }

  function putGreen() {
    dispatch({ type: "green_color" });
  }

  function putYellow() {
    dispatch({ type: "yellow_color" });
  }

  return (
    <div className="container">
      <ul class="color_choose">
        <div class="choose red" onClick={putRed}></div>
        <div class="choose green" onClick={putGreen}></div>
        <div class="choose yellow" onClick={putYellow}></div>
      </ul>
      <div
        className="container choosed_color"
        style={{ backgroundColor: state.color }}
      ></div>
    </div>
  );
};

export default ColorChange;
