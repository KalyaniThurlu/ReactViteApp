
import { useState } from "react"

const Count = () => {
    const [number, setNumber] = useState(0)
    function CountChanged() {
        setNumber(number + 1)
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={CountChanged}>Count</button>
        </div>
    )
}
export default Count