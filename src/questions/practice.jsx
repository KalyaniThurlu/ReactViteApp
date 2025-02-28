
import { useRef } from "react";

const Excookie = () => {
    let exRef = useRef(null)

    const handleChange = () => {
        console.log(exRef.current.value)
    }
    return (
        <div>
            <div>
                <input type="text" ref={exRef} onChange={handleChange} />
                <button type="submit">btn</button>
            </div>
        </div>
    );
};

export default Excookie;
