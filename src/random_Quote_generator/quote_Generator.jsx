
import { useState } from "react";

 export function QuoteGenerator() {
  const quotes = [
    'The best way to predict the future is to invent it.',
    'Life is 10% what happens to us and 90% how we react to it.',
    'The only way to do great work is to love what you do.',
    'Success is not the key to happiness. Happiness is the key to success.',
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={generateQuote}>Generate New Quote</button>
    </div>
  );
}



