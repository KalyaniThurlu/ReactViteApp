import { useRef } from "react"

const UncontrolledCompoent = () => {
    let exRef = useRef(null)
    const handleCLick = () => {
        console.log(exRef.current.value)
    }
    return (
        <div>
            <input type="text" ref={exRef} />
            <button type="submit" onClick={handleCLick}>submited</button>
        </div>
    )
}
export default UncontrolledCompoent