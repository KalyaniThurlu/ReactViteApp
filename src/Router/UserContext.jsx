
import { createContext, useState, useContext } from 'react';

//  Create a context
const CounterContext = createContext();

// Component to provide context values
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  // Functions to increment and decrement the count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

//  Component that uses the context
export const CounterDisplay = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
