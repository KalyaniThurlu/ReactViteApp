
import  { useState, useEffect } from 'react';

 export function WhackAMole() {
  const [moleIndex, setMoleIndex] = useState(0); 
  const [score, setScore] = useState(0); 

  
  useEffect(() => {
    const timer = setInterval(() => {
      setMoleIndex(Math.floor(Math.random() * 9)); 
    }, 1000);
    return () => clearInterval(timer); 
  }, []);

  
  function handleClick  (index) {
    if (index === moleIndex) {
      setScore(score + 1); 
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Whack-Mole Game</h1>
      <p>Your Score: {score}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px', justifyContent:"center",alignItems:"center" }}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: index === moleIndex ? 'orange' : 'lightgray',
              border: '1px solid black',
              borderRadius: '50%',
              cursor: 'pointer',
        

            }}
          ></div>
        ))}
      </div>
    </div>
  );
}


