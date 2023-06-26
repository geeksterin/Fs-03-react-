import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { productContext } from "../ProductsContext/productContext";

function Electronic(props) {
  const { updateState } = useContext(productContext);
  // console.log(updateState);
  const [electronicdata, setElectronicData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        setElectronicData(res.data);
        updateState("electronicProducts", res.data);
      });
  }, []);
  return (
    <div>
      <h2 style={{ color: "red" }}>Electronic Product</h2>
      <div>
        <ul type="none">
          {electronicdata.map((data) => {
            return (
              <Link style={{ color: "blue" }} to={`/productdetails/${data.id}`}>
                <li style={{ marginTop: "20px" }}>{data.title}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Electronic;
