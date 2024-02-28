import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [num, setNum] = useState(5);

  function increase() {
    if (num > 19) {
      alert("You can't");
      return;
    }
    setNum((prevNum) => prevNum + 1);
  }
  function decrease() {
    if (num < 1) {
      alert("You can't");
      return;
    }
    setNum((prevNum) => prevNum - 1);
  }

  return (
    <>
      <h1> Chai aur React {num} </h1>
      <img src={reactLogo} />
      <h2>{num}</h2>
      <button onClick={increase}>Increase Number {num}</button>
      <button onClick={decrease}>Decrease Number {num}</button>
    </>
  );
}

export default App;
