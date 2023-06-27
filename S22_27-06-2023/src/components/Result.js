import React from "react";
import { useSelector } from "react-redux";

function Result(props) {
  let data = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div>
      <h2>Result Component</h2>
      <p>Component - 1 : {data.comp1}</p>

      <p>Component - 2 : {data.comp2}</p>
    </div>
  );
}

export default Result;
