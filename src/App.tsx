import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { FormDemo } from "./components/FormDemo";
import { count } from "console";

let timerID = 0;
const Timer=()=>{
  const [count ,setCount] = useState(0);


  useEffect(()=>{
    timerID++;
    const timer  = setInterval(()=>{
      setCount((currentCount)=>{
        console.log(timerID , currentCount);
        return currentCount +1;
      });
    },1000);

    return()=>{
      clearInterval(timer);
    };
  },[]);

  return <div>
    Timer : {count}
  </div>
};

function App() {
  const [index, setIndex] = useState(0);
  const updateIndex = 
  useCallback(() => {setIndex(index + 1)}, [index]);
  return (
    <div className="App">
      {/* <FormDemo /> */}
      {/* <Timer key={index} /> */}
      <div>
        <button onClick={updateIndex}>update Index</button>
      </div>
    </div>
  );
}

export default App;
