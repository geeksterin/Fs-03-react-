import { useContext } from "react";
import myContext from "./myContext";

function D(props) {
  let contextData = useContext(myContext);
  return (
    <div>
      <h2>D Component</h2>

      <p style={{ color: "green", fontSize: "40px" }}> {contextData}</p>
    </div>
  );
}

export default D;
