import { useState } from "react"
import Child1Component from "./Child1"


const Parent1Component = () => {
    const [name,setName]=useState("priya")
    return(
        <div><h1>this is Parent Component</h1>
        <Child1Component name={name} updatedName={setName} />
        </div>
    )
    
}
export default Parent1Component