// import { useReducer } from "react"

import { useReducer, useState } from "react"



// const Exreducer = (state, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return { count: state.count + 1 };
//         case "DECREMENT":
//             return { count: state.count - 1 };
//         default:
//             return state


//     }

// }

// const Counter = () => {
//     const [state, dispatch] = useReducer(Exreducer, { count: 0 })
//     return (
//         <div>
//             <h1>{state.count}</h1>
//             <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>

//             <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//         </div>
//     )


// }
// export default Counter;


let initialState = { name: "" };

const Exreducer = (state, action) => {
    switch (action.type) {
        case "namechange":
            return { name: action.payload };

        default:
            return state
    }
};

const Exreducer1 = () => {
    const [state, dispatch] = useReducer(Exreducer, initialState);
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Name: {state.name}</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => dispatch({ type: "namechange", payload: name })}
            >
                Change Name
            </button>
        </div>
    );
};

export default Exreducer1;
