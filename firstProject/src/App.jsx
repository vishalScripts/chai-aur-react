import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Component from "./Component";

function App() {
  const [count, setCount] = useState(0);
  console.log("hello world");
  return (
    <>
      <div>Hello world</div>
      <Component/>
    </>
  );
}

export default App;
