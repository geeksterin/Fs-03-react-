import "./Nav.css";
function Nav(props) {
  return (
    <div className="nav">
      <div className="title flexC">
        <h2>GEEKSTER</h2>
      </div>

      <div className="menu flexC">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Products</a>
        <a href="#">ContactUs</a>
      </div>
    </div>
  );
}

export default Nav;
