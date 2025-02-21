import { useEffect, useState } from "react";

const ExLifeCycleMethods = () => {
    const [name, setName] = useState("john")
    
    useEffect(() => {
        console.log("Component Did Mount")
        return () => {
            console.log("Component Update Mount")
        }
    }, [name]);

    const nameChange = () => {
        setName("latha");
    }
    return (
        <div>
            {name}
            <button onClick={nameChange}>NameChange</button>
        </div>
    )
}
export default ExLifeCycleMethods; 