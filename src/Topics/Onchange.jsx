
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdError, setPwdError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "pwd") setPwd(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page reload

        let valid = true;

        if (name.length < 6) {
            setNameError("Must be at least 6 characters");
            valid = false;
        } else {
            setNameError("");
        }

        if (pwd.length < 6) {
            setPwdError("Password must be at least 6 characters");
            valid = false;
        } else {
            setPwdError("");
        }

        if (valid) {
            console.log({ name, pwd });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                   
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    <p style={{ color: "red" }}>{nameError}</p>
                </div>
                <div>
                    <input
                        type="password"
                        name="pwd"
                        value={pwd}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                    <p style={{ color: "red" }}>{pwdError}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
