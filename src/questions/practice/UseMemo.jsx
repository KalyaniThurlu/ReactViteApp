import { useMemo, useState } from "react";

const UsememoExample = () => {
    const [count, setCount] = useState(0)

    const computedValue = useMemo(() => {
        return count + 2
    }, [count])

    const handleCliCk = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>computedValue:{computedValue}</p>
            count:   {count}
            <button onClick={handleCliCk}>incerment</button>
        </div>
    )
}
export default UsememoExample;