import { useState } from "react"

const Count = () => {
    const [num, setNum] = useState(0)
    function increment() {
        setNum(num + 1)
    }
    return (
        <div>
            <h1>Exmple useState</h1>
            <button onClick={increment}>increment </button>
            <p>{num}</p>
        </div>
    )
}
export default Count