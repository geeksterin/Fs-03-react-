import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import electronicActionCreator from "../../ActionCreators/electronicActionCreator";

function Electronic(props) {
  const dispatch = useDispatch();
  let electronicStoreData = useSelector((storeData) => {
    return storeData.electronic;
  });

  useEffect(() => {
    if (!electronicStoreData.length > 0) {
      axios
        .get("https://fakestoreapi.com/products/category/electronics")
        .then((res) => {
          dispatch(electronicActionCreator(res.data));
        });
    }
  }, []);
  return (
    <div>
      <h2 style={{ color: "red" }}>Electronic Product</h2>
      <div>
        <ul type="none">
          {electronicStoreData.map((data) => {
            return (
              <Link
                key={data.id}
                style={{ color: "blue" }}
                to={`/productdetails/${data.id}`}
              >
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
