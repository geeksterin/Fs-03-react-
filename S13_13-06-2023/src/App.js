import "./App.css";
import { useState, useContext } from "react";
import Nav from "./Components/Nav/Nav";
import A from "./Components/Context/A";
import Login from "./Components/ContextProvider/Login";

import AuthContext from "./Components/ContextProvider/Context";
import ChakraUI from "./Components/ChakraUI/ChakraUI";
import Home from "./Components/Github/Home";
import { GithubProvider } from "./Components/Github/Context";

function App(props) {
  return (
    <div>
      <Nav />
      <GithubProvider>
        <Home />
      </GithubProvider>
    </div>
  );
}

export default App;
