import { useState } from "react";
import './App9.css';
import App2 from "./App2";

function App10() {
  function handleClick(){
    console.log("clicked...........");
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>this is the app</h1>
      <button onClick={handleClick}>clicked {count}</button><br></br>
      <button onClick={handleClick}>clicked {count}</button>
      <App2 count={count}/>
    </div>
  );
}

export default App10;
