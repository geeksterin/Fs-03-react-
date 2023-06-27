import { useState } from "react";
import store from "../Store/Store";

function Comp1(props) {
  const [state, setState] = useState("");

  const submitData = () => {
    var actionObject = {
      type: "comp1",
      info: state,
    };

    store.dispatch(actionObject);
  };

  return (
    <div>
      <h2>Componen - 1 </h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}

export default Comp1;
