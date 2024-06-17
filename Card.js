import React from "react";

function Card({ cardData }) {
  const cards = cardData.map((card) => (
    <div key={card.title}>
      <h1>{card.title}</h1>
      <p>{card.text}</p>
      <img src={`./images/${card.icon}`} />
    </div>
  ));
  return <div className="card">{cards}</div>;
}

export default Card;
