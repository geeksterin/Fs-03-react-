import { useState } from "react";
import { useDispatch } from "react-redux";
import fnaction from "../Action/action";

function Comp2(props) {
  const [state, setState] = useState("");

  const dispatch = useDispatch();

  const addData = () => {
    dispatch(fnaction("comp2", state));
  };
  return (
    <div>
      <h2>Component - 2</h2>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={addData}>Submit</button>
    </div>
  );
}

export default Comp2;
