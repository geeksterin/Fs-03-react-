import "./App.css";
import { useState, useContext } from "react";
import Nav from "./Components/Nav/Nav";
import A from "./Components/Context/A";
import Login from "./Components/ContextProvider/Login";
import Home from "./Components/ContextProvider/Home";
import AuthContext from "./Components/ContextProvider/Context";

function App(props) {
  const { isLoggedIn } = useContext(AuthContext);
  // const [isLoggedIn, setIsloggedIn] = useState(false);

  // const login = () => {
  //   setIsloggedIn(true);
  // };

  // const logout = () => {
  //   setIsloggedIn(false);
  // };

  // return (
  //   <div className="App">
  //     <Nav isLoggedIn={isLoggedIn} logout={logout} />
  //     {isLoggedIn ? <Home /> : <Login login={login} />}
  //   </div>
  // );
  return (
    <div className="App">
      <Nav />

      {isLoggedIn ? <Home /> : <Login />}
    </div>
  );
}

export default App;
