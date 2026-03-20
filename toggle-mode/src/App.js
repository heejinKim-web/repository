import "./App.css";
import ToggleHeaderContainer from "./containers/ToggleHeaderContainer";
import MiddleContentContainer from "./containers/MiddleContentContainer";

const App = () => {
  return (
    <div className="App">
      <ToggleHeaderContainer />
      <MiddleContentContainer />
    </div>
  );
};

export default App;
