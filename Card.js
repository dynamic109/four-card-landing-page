import React from "react";
import "./Card.css";

function Card({ cardData }) {
  const cards = cardData.map((card) => (
    <div
      className="card"
      style={{ borderTop: `3px solid ${card.color}` }}
      key={card.title}
    >
      <h1>{card.title}</h1>
      <p>{card.text}</p>
      <img src={`../../public/${card.icon}`} />
    </div>
  ));
  return <div className="card-container">{cards}</div>;
}

export default Card;
