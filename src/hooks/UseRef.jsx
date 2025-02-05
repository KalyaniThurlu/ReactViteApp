
import { useRef } from "react";

const Exuseref = () => {
    const inputRef = useRef(null);
    const handleClcik = () => {
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClcik}>btn</button>
        </div>
    );
};

export default Exuseref;
