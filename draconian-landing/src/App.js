import "./App.css";
import Header from "./components/Header";
import UpperVisual from "./components/UpperVisual";
import BandIntro from "./components/BandIntro";
import Albums from "./components/Albums";

function App() {
  return (
    <div className="App">
      <Header />
      <UpperVisual />
      <BandIntro />
      <Albums />
    </div>
  );
}

export default App;
