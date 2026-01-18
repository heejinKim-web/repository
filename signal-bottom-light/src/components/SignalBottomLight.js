import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "red_light":
      return {
        style: "red",
      };
    case "green_light":
      return {
        style: "green",
      };
    default:
      return state;
  }
}

const initialState = {
  style: "gray",
};

const SignalBottomLight = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function RedLight() {
    dispatch({ type: "red_light" });
  }

  function GreenLight() {
    dispatch({ type: "green_light" });
  }

  return (
    <div className="signal_bottom_light">
      <div className="signal_light">
        <div
          className="light light_red"
          style={{ background: state.style === "red" ? "red" : "gray" }}
        ></div>
        <div
          className="light light_green"
          style={{ background: state.style === "green" ? "green" : "gray" }}
        ></div>
      </div>
      <div className="light_bottom" style={{ background: state.style }}></div>
      <div className="buttons">
        <button onClick={RedLight}>빨간불</button>
        <button onClick={GreenLight}>초록불</button>
      </div>
    </div>
  );
};

export default SignalBottomLight;
