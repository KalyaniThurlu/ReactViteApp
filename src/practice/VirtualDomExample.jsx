import { useState } from "react";

const VirtualDomExample = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <h1>This Is virtual Dom </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default VirtualDomExample;