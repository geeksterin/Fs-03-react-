import "./App.css";

import Nav from "./Components/Nav/Nav";
import Cart from "./Components/Routing/Cart";
import Products from "./Components/Routing/Products";
import Home from "./Components/Routing/Home";

import { Navigate, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
