import { useState } from "react";

const Stateexample = () => {
    const [count, setCount] = useState(0)


    return (
        <div>
            {count}
            <button onClick={() => (setCount(count + 1))}>Increment</button>
            <button onClick={() => (setCount(count - 1))}>Decrement</button>
        </div>
    )
}
export default Stateexample;