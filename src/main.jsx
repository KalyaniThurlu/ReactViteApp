import { createContext } from 'react';
// import { createContext } from 'react';
// import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
// import CurdOparations from './questions/CurdOparation';
import ChildComponent from './questions/Child1';


// import PutApi2 from './questions/practice/cal2';
// import ChildComponent1 from './questions/Child1';

//import store from './questions/practice/Store';
//import Counter from './questions/practice/counter';
//import Counter1 from './questions/practice/ExReducer';
// import ChildComponent1 from './questions/Child1';
//import React from 'react';
//import PostApi2 from './questions/practice/cal2';
// import Excookies from './questions/practice/CookiesExample';
// import DeleteApi1 from './questions/practice/cal2';

// import GetApi1 from './practice/cal2';
//import KeyExample from './questions/practice/KeysExample';
// import Formvalidation from './practice/validation';
// import ExAge from './practice/ExReducer';
// import { Provider } from 'react-redux';
// import store from './practice/Store';  
// import Counter from './practice/counter';
//import Exreducer1 from './practice/ExReducer';
// const UserProfilePage = () => {
//   const { username } = useParams()
//   return <h1>hi{username}</h1>;
// }


// const App = () => {
//   const [count, setCount] = useState(0);


//   const increment = () => {
//     setCount(count + 1)

//   };



//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>This is the main component</h2>


//       <ChildComponent count={count} increment={increment} decrement={decrement} />
//     </div>
//   );
// };


export const MyContext = createContext();
const App = () => {
  let num = [1, 2, 3, 4]
  return (
    <div>
      <MyContext.Provider value={num}>
        <ChildComponent />

      </MyContext.Provider>
    </div>
  )
}
export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />



  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
