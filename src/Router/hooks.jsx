
import React, { useState, useCallback, useMemo } from "react";

const ChildComponent = React.memo(({ onClick }) => {
    console.log("ChildComponent re-rendered");
    return <button onClick={onClick}>Log Count</button>;
});

const Exhooks = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [number, setNumber] = useState(0);

    // Memoized function with useCallback
    const handleButtonClick = useCallback(() => {
        console.log(`Button clicked! Count is ${count}`);
    }, [count]);

    // Derived value with useMemo
    const doubledNumber = useMemo(() => {
        console.log("Doubled number calculated");
        return number * 2;
    }, [number]);

    return (
        <div>
            <h1>useCallback and useMemo Example</h1>
            <p>Count: {count}</p>
            <p>Doubled Number: {doubledNumber}</p>

            {/* Increment Count */}
            <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>

            {/* Update Text */}
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something"
            />

            {/* Update Number */}
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value, 10) || 0)}
                placeholder="Enter a number"
            />

            {/* Child Component */}
            <ChildComponent onClick={handleButtonClick} />
        </div>
    );
};

export default Exhooks;
