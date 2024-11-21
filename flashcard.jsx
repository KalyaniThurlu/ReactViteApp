
import { useState } from "react";



function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prev) => !prev); 
  };

  return (
    <div
      onClick={handleClick}
      style={{
        border: "2px solid black",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        cursor: "pointer",
        width: "200px",
        
      }}
    >
      <h3>{isFlipped ? answer : question}</h3>
    </div>
  );
}

// Flashcards Quiz App
export default function FlashcardsQuiz() {
  const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
    { question: "What is the square root of 64?", answer: "8" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest planet?", answer: "Jupiter" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Flashcards Quiz</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", 
          gridTemplateRows: "repeat(2, 1fr)", 
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {flashcards.map((card, index) => (
          <Flashcard key={index} question={card.question} answer={card.answer} />
        ))}
      </div>
    </div>
  );
}
