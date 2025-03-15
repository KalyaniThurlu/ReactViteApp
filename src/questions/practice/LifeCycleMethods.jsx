import { useEffect, useState } from "react";

const ExLifeCycle = () => {
    const [name, setName] = useState("rama")

    useEffect(() => {
        console.log("component did mount")
        return () => {
            console.log("component will unmount")
        }

    }, [name])
    const handleCliCk = () => {
        setName("suma")
    }
    return (
        <div>
            <h1>name:{name}</h1>
            <button onClick={handleCliCk}>nameChange</button>
        </div>
    )
}
export default ExLifeCycle;