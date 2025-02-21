import { useCallback, useState } from "react";

const UseCallbackExample = () => {
    const [count, setCount] = useState(0)

    const excallback = useCallback(() => {
        return count + 2;
    }, [count]);

    const handleCliCk = () => {
        setCount(count + 1)
    }
    return (
        <div>


            <div><p>count:{count}<br /></p>

                <p>callback results:{excallback()}</p>
                <button onClick={handleCliCk}>Increment</button>
            </div>


        </div>

    )
}
export default UseCallbackExample;