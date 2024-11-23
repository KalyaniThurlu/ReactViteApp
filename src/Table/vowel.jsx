
import { useState } from "react";

export function VowelConsonantChecker() {
  const [inputLetters, setInputLetters] = useState("");
  const [letters, setLetters] = useState("");


  

  function isVowel(letter) {
    const vowels = "aeiouAEIOU";
    return vowels.includes(letter);
  }


  
  function handleClick() {
    if (inputLetters.length === 1 && /[a-zA-Z]/.test(inputLetters)) {
      if (isVowel(inputLetters)) {
        setLetters("The letter is a vowel");
      } else {
        setLetters("The letter is a consonant");
      }
    } else {
      setLetters("Invalid input, please enter a letter");
    }
  }

  function handleClear() {
    setInputLetters("");
    setLetters("");
  }


  function handleChange(e) {
    setInputLetters(e.target.value);
  }

  return (
    <div
      style={{
        fontSize: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
      }}
    ><h2>Vowel or Consonant Checker</h2>
      {/* Input Field */}
      <input
        type="text"
        value={inputLetters}
        onChange={handleChange}
        placeholder="Enter a letter"
        style={{
          padding: "10px",
          fontSize: "20px",
          textAlign: "center",
      
          
          marginBottom: "20px",
          width: "250px",
        
          
        }}
      />
      
      
      <div style={{ display: "flex", gap: "15px" }}>
        <button
          onClick={handleClick}
          style={{
            padding: "10px 10px",
          }}
        >
          Check Btn
        </button>
        <button
          onClick={handleClear}
          style={{
            padding: "10px 10px",
          }}
        >
          Clear Btn
        </button>
      </div>
        {letters}
  
      
    </div>
  );
}
