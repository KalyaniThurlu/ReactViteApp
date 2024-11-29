
import{ useState } from 'react';

 export function FlashcardsApp() {

  
  const flashcards = [
    { question: "What is HTML?", answer: "Hypertext Markup Language is the standard markup language used to create and structure content on the web" },
    { question: "What is CSS?", answer: "Cascading Style Sheets is a stylesheet language used to describe the presentation of a document written in HTML" },
    { question: "What is JavaScript?", answer: "JavaScript is a high-level, interpreted programming language that is primarily used to create interactive and dynamic behavior on websites" },
  ];


  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);


  
  const nextFlashcard = () => {
    setShowAnswer(false);  
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length); 
    
  };


  
  const showAnswerHandler = () => {
    setShowAnswer(true);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Flashcards App</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Question:</h2>
        <p>{flashcards[currentIndex].question}</p>
      </div>

      <button onClick={showAnswerHandler}>Show Answer</button><br /><br />
      
      {showAnswer && (
        <div style={{ marginTop: '10px' }}>
          <h2>Answer:</h2>
          <p>{flashcards[currentIndex].answer}</p>
        </div>
      )}

      <button onClick={nextFlashcard} style={{ marginTop: '20px' }}>
        Next Flashcard
      </button>
    </div>
  );
}

export default FlashcardsApp;
