import { useState } from "react"
import ChildComponent1 from "../propsdrilling/ChildComponent"

const ParentComponent1 = () => {
    const [name, setName] = useState("suma")
    return (
        <div>

            <ChildComponent1 name={name} uppdatedName={setName} />
        </div>
    )
}
export default ParentComponent1