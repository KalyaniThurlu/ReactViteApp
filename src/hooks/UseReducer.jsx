import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === "increment") return state + 1;
    if (action.type === "decrement") return state - 1;
    if (action.type === "reset") return 0;
    return state;
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p style={{ marginLeft: "40px" }}>Count: {count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>

            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}

export default Counter;
