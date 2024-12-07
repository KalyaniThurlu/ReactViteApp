
import { useState } from "react";

 export function MathQuizApp() {

  
  const [num1, setNum1] = useState(generateRandomNumber());
  const [num2, setNum2] = useState(generateRandomNumber());
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  
  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer) === correctAnswer) {
      setFeedback("Correct! ");
    } else {
      setFeedback(`Incorrect. The correct answer was ${correctAnswer}.`);
    }
   
    
    setNum1(generateRandomNumber());
    setNum2(generateRandomNumber());
    setUserAnswer("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Math Quiz App</h1>
      <p>
        What is <strong>{num1}</strong> + <strong>{num2}</strong>?
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your answer"
          style={{ padding: "10px", fontSize: "15px", width: "100px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px", marginLeft: "10px", fontSize: "16px" }}
        >
          Submit
        </button>
      </form>
      <p style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>{feedback}</p>
    </div>
  );
}


