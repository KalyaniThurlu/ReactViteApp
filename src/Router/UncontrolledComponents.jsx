
import{ useRef } from "react";

const UncontrolledComponents = () => {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Entered Value: ${inputRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Name:
                <input type="text" ref={inputRef} />
            </label><br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledComponents;
