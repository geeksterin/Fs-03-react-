import React from "react";
import "./Product.css";
import { Link, Outlet } from "react-router-dom";

function Products(props) {
  return (
    <div className="productsContainer">
      <div className="productCategories">
        <Link to="electronic">Electronic</Link>
        <Link to="jewelery">Jewelery</Link>
        <Link to="">Men'sClothing</Link>
        <Link to="">Women'sClothing</Link>
      </div>
      <div className="categoryComponent">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
