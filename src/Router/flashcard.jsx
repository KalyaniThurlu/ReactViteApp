
import  { useState } from 'react';



 export function FlashcardApp(){
  const flashcards = [
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { question: 'What is JSX?', answer: 'A syntax extension for JavaScript that looks like HTML.' },
    { question: 'What is a component in React?', answer: 'A reusable piece of code that returns a part of the UI.' },
    { question: 'What is state in React?', answer: 'An object that holds the dynamic data of a component.' },
    { question: 'What is a prop in React?', answer: 'A property passed to a component to configure it.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleNext = () => {
    setIsAnswerVisible(false); 
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handleFlip = () => {
    setIsAnswerVisible((prevState) => !prevState);
  };

  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <div className="flashcard-content">
          <h2 style={{marginTop:"10px"}}>flashcard</h2>
          <p className="flashcard-text" style={{marginTop:"20px"}}>
            {isAnswerVisible ? flashcards[currentIndex].answer : flashcards[currentIndex].question}
          </p>
        </div>
        <button className="flip-btn" onClick={handleFlip}>
          {isAnswerVisible ? 'Show Question' : 'Show Answer'}
        </button> <button className="next-btn" onClick={handleNext}>
        Next Flashcard
      </button>
      </div>
     
     
    </div>
  );
};


