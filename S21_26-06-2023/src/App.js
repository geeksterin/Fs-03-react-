import "./App.css";

import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Result from "./components/Result";

function App(props) {
  return (
    <div className="App">
      <h2 style={{ marginBottom: "30px" }}>Welcome to Redux</h2>
      <Comp1 />
      <Comp2 />

      <Result />
    </div>
  );
}

export default App;
