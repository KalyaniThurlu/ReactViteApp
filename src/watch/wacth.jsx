
import { useState, useEffect } from "react";

export function GreetingAndClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

 
  
  const getCurrentGreeting = () => {
    const currentHour = currentTime.getHours();
    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };


  
   function updateCurrentTime ()  {
    setCurrentTime(new Date());
    setTimeout(updateCurrentTime, 1000); 
    
  };

 
  
  useEffect(() => {
    updateCurrentTime();  
  }, []);

  return (
    <div>
      <h1>{getCurrentGreeting()}!</h1>
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}
