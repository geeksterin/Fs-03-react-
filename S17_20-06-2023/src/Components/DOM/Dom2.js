import { useRef } from "react";

function Dom2(props) {
  let h2Ref = useRef(null);
  const changeFont = (e) => {
    h2Ref.current.style.fontSize = e.target.value;
  };

  const changeColor = (e) => {
    h2Ref.current.style.color = e.target.value;
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <select onChange={changeFont}>
        <option>Select Size</option>
        <option value="12px">10</option>
        <option value="20px">20</option>
        <option value="30px">30</option>
        <option value="40px">40</option>
        <option value="50px">50</option>
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <select onChange={changeColor}>
        <option>Select Color</option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="black">black</option>
        <option value="blue">blue</option>
        <option value="coral">coral</option>
      </select>
      <h2 ref={h2Ref}>Undertsanding React is To Easy</h2>
    </div>
  );
}

export default Dom2;
