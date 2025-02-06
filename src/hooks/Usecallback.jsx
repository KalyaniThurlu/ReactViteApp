import { useState, useCallback } from "react";

function Button({ onClick }) {
    return <button onClick={onClick}>Click Me</button>;
}

const Excallback = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <Button onClick={handleClick} />
        </div>
    );
}

export default Excallback;
