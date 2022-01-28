import { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");
  return (
    <div>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default App;
