

import { CounterProvider, CounterDisplay } from './UserContext';

const Counter = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  );
};

export default Counter;
