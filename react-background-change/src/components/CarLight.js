import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "left_light":
      return {
        image: "/img/car-left.png",
      };
    case "right_light":
      return {
        image: "/img/car-right.png",
      };
    case "emergency_light":
      return {
        image: "/img/car-both.png",
      };
    default:
      return state;
  }
}

const initialState = {
  image: "/img/car-both.png",
};

const CarLight = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function leftLight() {
    dispatch({ type: "left_light" });
  }

  function rightLight() {
    dispatch({ type: "right_light" });
  }

  function emergencyLight() {
    dispatch({ type: "emergency_light" });
  }

  return (
    <div className="container">
      <div className="car_image">
        <img src={state.image} alt="car image" />
        <div className="buttons">
          <button onClick={leftLight}>좌향등</button>
          <button onClick={rightLight}>우향등</button>
          <button onClick={emergencyLight}>비상등</button>
        </div>
      </div>
    </div>
  );
};

export default CarLight;
