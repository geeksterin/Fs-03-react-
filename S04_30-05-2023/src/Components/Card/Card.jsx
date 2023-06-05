import React from "react";
import "./Card.css";

function Card({ image, name }) {
  return (
    <div className="card">
      <img src={image} width="100%" height="200" />
      <h3>{name}</h3>
      <p>This is my Card Component, Created using Functional Appraoch</p>
      <button>Details</button>
    </div>
  );
}

export default Card;
