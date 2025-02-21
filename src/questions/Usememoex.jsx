import { useMemo, useState } from "react";

const ExuseMemo = () => {
    const [count, setCount] = useState(0)
    let storedFunction = useMemo(() => {

        return count + 2
    }, [count])
    return (
        <div>
            <h1>count:{count}</h1>
            <h1>storedvalue:{storedFunction}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrerement</button>
        </div>
    )
}
export default ExuseMemo;