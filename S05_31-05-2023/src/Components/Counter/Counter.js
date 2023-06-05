import { useState } from "react";

function Counter(props) {
  console.log("Counter is Re-rendered");
  const [state, setState] = useState(0);
  const [text, setText] = useState("");
  var countValue = 0;
  const increaseCount = () => {
    // state = state + 1
    setState(state + 5);
    // countValue = countValue + 1;
    // console.log(state);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count Value is {state} </h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <p>{text}</p>
      <button onClick={increaseCount}>Inc Count</button>
    </div>
  );
}

export default Counter;
