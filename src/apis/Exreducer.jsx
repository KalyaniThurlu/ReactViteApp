import { useReducer } from "react"

const initialState = { count: 0 }
const Exreducer = (state, action) => {

    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        default:
        return state;

    }
}
const Counter2 = () => {

    const [state, dispatch] = useReducer(Exreducer, initialState)
    return (
        <div>
            {state.count}
            <button onClick={() => dispatch({ type: "increment" })}>inc</button>
            <button onClick={() => dispatch({ type: "decrement" })}>derement</button>
        </div>
    )
}
export default Counter2