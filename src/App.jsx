import { useState } from "react";
import "./App.css";

let data = [
  {
    question: "What is the capital of France?",
    answer:
      "Paris, a i am just checking somethingvibrant city known for iconic landmarks like the Eiffel Tower and the Louvre.",
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
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className="container">
      <div className="subContainer">
        <div className="progressBar">
          <span className="remainingQuestions">5 of 25</span>
        </div>
      </div>
      <div className="subContainer flashCard">
        <div className="element card">
          <div className="subElementBody" id="question">
            {data[count].question}
          </div>
          <div className="subElementBody" id="answer">
            {data[count].answer}
          </div>
        </div>
        <div className="element control">
          <span
            id="previous"
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            ◀ Previous
          </span>
          <span id="showHideAnswer">Show Answer</span>
          <span
            id="next"
            onClick={() =>
              setCount(count < data.length - 1 ? count + 1 : data.length - 1)
            }
          >
            Next ▶
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
