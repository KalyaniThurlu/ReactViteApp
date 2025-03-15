import { useState } from "react"

const ExstateComponent = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
export default ExstateComponent