
import  { useState } from 'react';

export function Numbers() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

 
  
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const numGuess = parseInt(guess);

    
    if (isNaN(numGuess)) {
      setFeedback('Please enter a valid number.');
      return;
    }

    setAttempts(attempts + 1); 

    
    if (numGuess === targetNumber) {
      setFeedback(`Correct! You guessed the number in ${attempts + 1} attempts.`);
    } else {
      setFeedback(numGuess < targetNumber ? 'Too low' : 'Too high');
    }
  };

  const handleReset = () => {
    setTargetNumber(generateRandomNumber()); 
    setGuess(''); 
    setFeedback(''); 
    setAttempts(0); 
  };

  return (
    <div className="game-container">
      <h1>Number Guessing Game</h1>
      <p>Guess the number between 1 and 100</p>

      <div>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
        />
        <button onClick={handleGuess}>Guess</button>
      </div>

      {feedback && <p>{feedback}</p>}

      <div>
        <button onClick={handleReset}>Play Again</button>
      </div>

      <p>Attempts: {attempts}</p>
    </div>
  );
}
