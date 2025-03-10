
// import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import GetApi1 from './practice/cal2';
import DeleteApi1 from './practice/cal2';

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

// export const MyContext = createContext()

// const App = () => {

//   const obj = {
//     name: "suma",
//     price: 2000,
//     id: 12
//   };
//   return (
//     <div>


//       < MyContext.Provider value={obj}>
//         <ChildComponent />
//       </ MyContext.Provider>
//     </div>
//   )
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />


  <React.StrictMode>
    <DeleteApi1 />
  </React.StrictMode>
);
