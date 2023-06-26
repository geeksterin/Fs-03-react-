import { useState } from "react";
import myReduxStore from "../Store/Store";

function Comp1(props) {
  const [state, setState] = useState("");

  const submitData = () => {
    //create Action object and Store Component Data inside the action object as a second parameter
    var myAction = {
      type: "comp1",
      payload: state,
    };
    myReduxStore.dispatch(myAction);
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
