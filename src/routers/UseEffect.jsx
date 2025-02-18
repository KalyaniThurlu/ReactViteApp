import { useEffect, useState } from "react"

const ExsueEffectHook = () => {
    const [name, setName] = useState("jhon")
    useEffect(() => {
        console.log("only function first time render")
    }, [name])
    return (
        <div>
            name:{name}
            <button onClick={() => setName("jone")}>change name</button>
        </div>

    )
}
export default ExsueEffectHook