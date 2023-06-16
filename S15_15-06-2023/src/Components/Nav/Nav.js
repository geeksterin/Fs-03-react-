import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <div className="title flexC">
        <h2>GEEKSTER </h2>
      </div>

      <div className="menu flexC">
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Nav;
