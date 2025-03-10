import { useRef } from "react";



const UnConTrolledComponents = () => {

    const handleClick = () => {
        console.log(exRef.current.value)
    }
    let exRef = useRef(null)
    return (
        <div>
            <input type="text" ref={exRef} />
            <button onClick={handleClick}>btn</button>
        </div>
    )

}
export default UnConTrolledComponents;