import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import data from "./data.json";

function App() {
  const [cardData, setCardData] = useState(data);

  return (
    <main>
      <section className="app">
        <div className="app-info">
          <p className="title">
            Reliable, efficient delivery <br /> <b>Powered by Technology</b>
          </p>
          <p className="text">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <Card cardData={cardData} />
      </section>

      <footer>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. Coded by{" "}
        <a href="https://github.com/dynamic109">dynamicboy</a>.
      </footer>
    </main>
  );
}

export default App;
