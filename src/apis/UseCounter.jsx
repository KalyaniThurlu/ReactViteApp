// Counter.js
import { useReducer } from "react";
import { counterReducer, initialState } from "./UseReducer";

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
    );
};

export default Counter;
