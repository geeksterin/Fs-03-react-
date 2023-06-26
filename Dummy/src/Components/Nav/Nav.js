import "./Nav.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import AuthContext from "../ContextProvider/Context";
function Nav(props) {
  // const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <div className="nav">
      <div className="title flexC">
        <h2 style={{ color: "white" }}>GEEKSTER </h2>
      </div>

      <div className="menu flexC">
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>
        <Link style={{ color: "white" }} to="/timer">
          Timer
        </Link>
        <Link style={{ color: "white" }} to="/useref">
          UseRef
        </Link>
        <Link style={{ color: "white" }} to="/products">
          Products
        </Link>
        <Link style={{ color: "white" }} to="/form">
          Form
        </Link>
        {/* {isLoggedIn ? (
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : null} */}
      </div>
    </div>
  );
}

export default Nav;
