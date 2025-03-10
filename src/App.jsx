

import { Header } from "./portpoliowebsite/portfolio";
import { CounterProvider } from "./Router/counter";

function App() {


  
  return (
    <CounterProvider>
      <App />
      <Header />
    </CounterProvider>




  );
}

export default App;
