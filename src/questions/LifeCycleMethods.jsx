
import { useEffect, useState } from "react";

const LifeCycleMethodsEx = () => {
    const [name, setName] = useState("john");

    useEffect(() => {
        console.log("component did mount")
        return () => {
            console.log("component will unmount")
        }

    }, [name])
    console.log("component update mount")
    const handleClick = () => {
        setName("latha")

    };
    return (
        <div>
            {name}
            <button onClick={() => handleClick(setName)}>Change Name</button>
        </div>
    );
};

export default LifeCycleMethodsEx;
