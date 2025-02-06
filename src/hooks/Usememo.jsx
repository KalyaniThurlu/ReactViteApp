import { useState, useMemo } from "react";

function ExpensiveCalculation({ num }) {
    const result = useMemo(() => {
        console.log("Calculating...");
        return num * 2;
    }, [num]);

    return <p>Result: {result}</p>;
}

function Exusememo() {
    const [count, setCount] = useState(1);

    return (
        <div>
            <ExpensiveCalculation num={count} />
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default Exusememo;
