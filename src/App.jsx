import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="subContainer">
        <div className="progressBar"></div>
      </div>
      <div className="subContainer flashCard">
        <div className="element card"></div>
        <div className="element control"></div>
      </div>
    </div>
  );
}

export default App;
