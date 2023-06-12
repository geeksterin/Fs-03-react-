import "./Nav.css";
import { useContext } from "react";
import AuthContext from "../ContextProvider/Context";
function Nav(props) {
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="title flexC">
        <h2>GEEKSTER </h2>
      </div>

      <div className="menu flexC">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Products</a>
        <a href="#">ContactUs</a>
        {isLoggedIn ? (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
