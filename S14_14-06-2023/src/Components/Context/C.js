import { useContext } from "react";
import D from "./D";
import myContext from "./myContext";

function C(props) {
  let data = useContext(myContext);
  return (
    <div>
      <h2>
        C Component : <span style={{ color: "red" }}>{data}</span>
      </h2>
      <hr />
      <D />
    </div>
  );
}

export default C;
