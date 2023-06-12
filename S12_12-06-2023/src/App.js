import "./App.css";
import { useState, useContext } from "react";
import Nav from "./Components/Nav/Nav";
import A from "./Components/Context/A";
import Login from "./Components/ContextProvider/Login";

import AuthContext from "./Components/ContextProvider/Context";
import ChakraUI from "./Components/ChakraUI/ChakraUI";
import Home from "./Components/Github/Home";

function App(props) {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
