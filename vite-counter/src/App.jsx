import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card"
function App() {
  let [counter, updateCounter] = useState(3);
  //let counter = 3
  const addValue = () => {
    counter = counter + 1;
    updateCounter(counter);
    console.log("Value Added", counter);
  };
  let removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      updateCounter(counter);
      console.log("Value Removed", counter);
    }else{
      console.log("Value could not be decresed than zero", counter);
    }
  };
  const myobj = ()=> {

  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increase Value {counter}</button>
      <button onClick={removeValue}>Decrease Value {counter}</button>
      <Card name="abrar" />
    </>
  );
}

export default App;
