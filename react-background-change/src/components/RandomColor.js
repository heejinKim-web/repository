import React, { useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState("f1f5f8");
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  const setRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };

  const setRandomColor = () => {
    let randomColor = "";
    for (let i = 0; i < 6; i++) {
      randomColor += hex[setRandomNumber()];
    }
    setColor(randomColor);
  };

  return (
    <>
      <nav>
        <div className="nav-center">
          <h4>color flipper</h4>
          <ul className="nav-links">
            <li>
              <a href="#">simple</a>
            </li>
            <li>
              <a href="#">hex</a>
            </li>
          </ul>
        </div>
      </nav>
      <main style={{ backgroundColor: "#" + color }}>
        <div className="container">
          <h2>
            background-color : <span className="color">#{color}</span>
          </h2>
          <button className="btn btn-hero" onClick={setRandomColor}>
            click me
          </button>
        </div>
      </main>
    </>
  );
};

export default RandomColor;
