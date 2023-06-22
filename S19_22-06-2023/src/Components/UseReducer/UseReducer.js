import { useReducer } from "react";

import counterReducer from "./reducer";

function UseReducer(props) {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 }); //5
  return (
    <div style={{ marginTop: "100px" }}>
      <h2 style={{ color: "green" }}>Counter : {state.count}</h2>
      <button
        onClick={() => {
          dispatch({
            type: "increasecount",
            payload: 5,
          });
        }}
      >
        Increase Count
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "decreasecount",
            payload: 2,
          });
        }}
      >
        Decrease Count
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "reset",
            payload: 0,
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default UseReducer;
