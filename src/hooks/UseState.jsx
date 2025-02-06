import { useState } from "react";

const ExuseState = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>

            <p>count:{count}</p>

            <button onClick={handleClick}>btn</button>
            <button onClick={() => { setCount(count - 1) }}>decrement</button>
        </div>

    )
}
export default ExuseState;

