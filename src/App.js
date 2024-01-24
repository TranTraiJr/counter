import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount((count) => count + 1);
  }

  function decrease() {
    setCount((count) => count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <div className="container">
      <h1>Counter</h1>
      <span
        id="value"
        className={count > 0 ? "colorgreen" : count < 0 ? "colorred" : ""}
      >
        {count}
      </span>
      <div className="btn-group">
        <button className="btn btn-decrease" onClick={decrease}>
          DECREASE
        </button>
        <button className="btn btn-reset" onClick={reset}>
          RESET
        </button>
        <button className="btn btn-increase" onClick={increase}>
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
