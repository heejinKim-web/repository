import { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Popup from "./Popup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const ref = useRef(null);

  const onClick = () => {
    setIsPopupOpen(true);
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={onClick}>팝업열기</button>
        </header>
      </div>
      <Popup
        ref={ref}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </>
  );
}

export default App;
