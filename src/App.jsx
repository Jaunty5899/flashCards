import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="subContainer">
        <div className="progressBar">
          <span className="remainingQuestions">5 of 25</span>
        </div>
      </div>
      <div className="subContainer flashCard">
        <div className="element card">
          <div class="subElementBody" id="result">
            hello
          </div>
          <div class="subElementBody" id="summary">
            world
          </div>
        </div>
        <div className="element control"></div>
      </div>
    </div>
  );
}

export default App;
