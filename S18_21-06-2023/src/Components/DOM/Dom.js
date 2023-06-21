import { useRef } from "react";

function Dom(props) {
  let h2Ref = useRef(); //h2Ref.current = <h2Reference>

  const changeStyle = () => {
    h2Ref.current.style.color = "red";
    h2Ref.current.innerText = "useRef concept is something new";
  };
  return (
    <div>
      <h2 ref={h2Ref}>Understanding useRef() hook</h2>
      <button onClick={changeStyle}>Change Style</button>
    </div>
  );
}

export default Dom;
