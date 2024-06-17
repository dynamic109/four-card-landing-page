import React, { useState } from "react";
import Card from "./Card";
import data from "./data.json";

function App() {
  const [cardData, setCardData] = useState(data);

  return (
    <section className="app">
      <Card cardData={cardData} />
    </section>
  );
}

export default App;
