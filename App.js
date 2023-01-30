import { useState } from "react";
import './App';
import App2 from "./App2";

function App() {
  const [count,setCount] = useState(0);
  const handleClick = () =>  {
    setCount (count + 1);
  };
  return (
    <div>
      <h1>this is the app</h1>
      <button onClick={handleClick}>clicked {count} times</button><br/>
      <button onClick={handleClick}>clicked {count} times</button>
      <App2 count={count}/>
    </div>
  );
}

export default App;
