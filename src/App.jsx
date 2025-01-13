import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="subcontainer progressBar"></div>
      <div className="subcontainer flashCard">
        <div className="element card"></div>
        <div className="element control"></div>
      </div>
    </div>
  );
}

export default App;
