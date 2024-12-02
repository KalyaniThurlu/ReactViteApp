
import  { useState, useEffect } from "react";

export function PomodoroTimer() {
  const [time, setTime] = useState(60); 
  const [isRunning, setIsRunning] = useState(false); 


  useEffect(() => {
    if (!isRunning) return; 

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) return prevTime - 1; 
        clearInterval(timer); 
        alert("Time is up!"); 
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, [isRunning]);

  const toggleTimer = () => setIsRunning(!isRunning); 
  const resetTimer = () => {
    setTime(60); 
    setIsRunning(false); 
  };

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <h2>{Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}</h2>
      <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={resetTimer} style={{marginLeft:"20px"}}>Reset</button>
    </div>
  );
}
