// // import { useReducer } from "react"

import { useReducer } from "react"

// import { useReducer, useState } from "react"



// let initialState = { name: "" };

// const Exreducer = (state, action) => {
//     switch (action.type) {
//         case "namechange":
//             return { name: action.payload };

//         default:
//             return state
//     }
// };

// const Exreducer1 = () => {
//     const [state, dispatch] = useReducer(Exreducer, initialState);
//     const [name, setName] = useState("");

//     return (
//         <div>
//             <h1>Name: {state.name}</h1>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <button
//                 onClick={() => dispatch({ type: "namechange", payload: name })}
//             >
//                 Change Name
//             </button>
//         </div>
//     );
// };

// export default Exreducer1;

let initialState = { count: 0 }
const ExReducer = (state, action) => {
    if (action.type === "increment") {
        return { count: state.count + 1 }
    } else if (action.type === "decrement") {
        return { count: state.count - 1 }
    }
    return state


}
const Counter1 = () => {
    const [state, dispatch] = useReducer(ExReducer, initialState)

    return (
        <div>
            <p>count:{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>increment</button>
        </div>
    )
}
export default Counter1;
