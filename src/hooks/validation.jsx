
import { useState } from "react";

const Validation = () => {
    const [name, setName] = useState("");
    const [nameerror, setNameError] = useState("");

    const [pwd, setPwd] = useState("");
    const [pwderror, setPwdError] = useState("");

    const [number, setNumber] = useState("");
    const [numberError, setNumberError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        let validate = true;

        if (name.length < 4) {
            setNameError("Name must be at least 4 characters");
            validate = false;
        } else {
            setNameError("");
        }
        if (pwd.length < 6) {
            setPwdError("Password must be at least 6 characters");
            validate = false;
        } else {
            setPwdError("");
        }

        let numpattern = /^\+91\d{10}$/; // FIXED: Optional +91
        if (!number.match(numpattern)) {
            setNumberError("Enter a valid 10-digit number with optional +91");
            validate = false;
        } else {
            setNumberError("");
        }

        if (validate) {
            alert("Form submitted successfully!");
            console.log({ name, pwd, number });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "pwd") {
            setPwd(value);
        } else if (name === "number") {
            setNumber(value);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input type="text" name="name" value={name} onChange={handleChange} />
                    {nameerror && <p style={{ color: "red" }}>{nameerror}</p>}
                </div>
                <div>
                    Password: <input type="password" name="pwd" value={pwd} onChange={handleChange} />
                    {pwderror && <p style={{ color: "red" }}>{pwderror}</p>}
                </div>
                <div>
                    Number: <input type="text" name="number" value={number} onChange={handleChange} />
                    {numberError && <p style={{ color: "red" }}>{numberError}</p>}
                </div>
                <button type="submit">Submit</button>  
            </form>
        </div>
    );
};

export default Validation;
