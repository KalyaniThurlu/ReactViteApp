
import  { useState } from "react";

export  function TextFormatter() {
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Text Formatter</h2>
      <textarea
        rows="5"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          fontWeight: isBold ? "bold" : "normal",
          fontStyle: isItalic ? "italic" : "normal",
          textDecoration: isUnderline ? "underline" : "none",
          width: "40%",
          margin: "10px 0",
          padding: "10px",
        }}
      ></textarea>
      <div style={{display:"flex",justifyContent:"center",gap:"10px",marginTop:"10px"}}>
        <button onClick={() => setIsBold(!isBold)}>
          {isBold ? "Unbold" : "Bold"}
        </button>
        <button onClick={() => setIsItalic(!isItalic)}>
          {isItalic ? "Unitalicize" : "Italic"}
        </button>
        <button onClick={() => setIsUnderline(!isUnderline)}>
          {isUnderline ? "Remove Underline" : "Underline"}
        </button>
      </div>
    </div>
  );
}
