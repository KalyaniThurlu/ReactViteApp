import { useContext } from "react"
import { MyContext } from "../main"

const ChildComponent = () => {
    let num = useContext(MyContext)
    return (
        <div><h1>this is childComponent</h1>
            <h1>nums:{num}</h1>
        </div>
    )
}
export default ChildComponent

