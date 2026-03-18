import CardToggle from "./components/CardToggle";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";
import TrueFalse from "./components/TrueFalse";
import CarMove from "./components/CarMove";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CardToggle />
      <Tabs />
      <Accordion />
      <TrueFalse />
      <CarMove />
    </div>
  );
}

export default App;
