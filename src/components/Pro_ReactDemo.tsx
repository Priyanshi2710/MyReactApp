import React, { useEffect, useState } from "react";

let timerID=0;
export const Timer2 =()=>{

    const [count, setCount] = useState(0);

useEffect(() => {
  timerID++;
  const timer =setInterval(()=>{
    setCount((currentCount)=>{
        console.log(`Timer ${timerID} starts ${currentCount}`);
        return currentCount+1;
    });
  },1000);
  return()=>{
    clearInterval(timer);
  }
}, []);



    return(
        <div>Timer :{count}</div>

    )
}


