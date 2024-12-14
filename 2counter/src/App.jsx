import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 5;
  const addValue = () => {
    // console.log("Value added", Math.random());

    // counter += 1;

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log("clicked for increasing", counter);
  };
  const removeValue = () => {
    // console.log("Value added", Math.random());

    // counter -= 1;

    setCounter(prevCounter - 1);

    console.log("clicked for decreasing", counter);
  };

  return (
    <>
      <h1>chai aur rect</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>

      <p> footer:{counter}</p>
    </>
  );
}

export default App;
