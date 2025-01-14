import { useState } from "react";
import "./App.css";

let data = [
  {
    question: "What is the capital of France?",
    answer:
      "Paris, a vibrant city known for iconic landmarks like the Eiffel Tower and the Louvre.",
  },
  {
    question: "What is the largest ocean in the world?",
    answer:
      "The Pacific Ocean, covering 63 million sq miles and known for its diverse marine life.",
  },
  {
    question: "What is the smallest planet in our solar system?",
    answer:
      "Mercury, the closest planet to the Sun with a diameter of just 3,031 miles.",
  },
  {
    question: "What is the currency used in Japan?",
    answer:
      "The Japanese Yen, one of the world's major currencies and a symbol of Japan's strong economy.",
  },
];

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="subContainer">
        <div className="progressBar">
          <span className="remainingQuestions">5 of 25</span>
        </div>
      </div>
      <div className="subContainer flashCard">
        <div className="element card">
          <div class="subElementBody" id="question">
            hello
          </div>
          <div class="subElementBody" id="answer">
            world
          </div>
        </div>
        <div className="element control"></div>
      </div>
    </div>
  );
}

export default App;
