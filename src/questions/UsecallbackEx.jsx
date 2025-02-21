import { useCallback, useState } from "react";

const UseCallbackEx = () => {
    const [count, setCount] = useState(0)
    let storedCallBackValue = useCallback(() => {
        return count + 2
    }, [count])
    return (
        <div>
            <h1>Count:{count}</h1>
            <p>storedCallBackValue:{storedCallBackValue()}</p>
            <button onClick={() => setCount(count + 1)}>btn</button>
        </div>
    )
}
export default UseCallbackEx;