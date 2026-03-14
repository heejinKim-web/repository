import "./App.css";
import Header from "./components/Header";
import UpperVisual from "./components/UpperVisual";
import BandIntro from "./components/BandIntro";
import Albums from "./components/Albums";
import Songs from "./components/Songs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <UpperVisual />
      <BandIntro />
      <Albums />
      <Songs />
      <Footer />
    </div>
  );
}

export default App;
