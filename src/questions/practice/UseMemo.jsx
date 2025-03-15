import { useCallback, useState } from "react";

const ExuseMemo = () => {
    const [count, setCount] = useState(0)
    let exUsememoValue = useCallback(() => {
        return count + 1
    }, [count])

    return (
        <div>
            <p>UseMemoValue:{exUsememoValue()}</p>
            <p>count:{count}</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}
export default ExuseMemo;