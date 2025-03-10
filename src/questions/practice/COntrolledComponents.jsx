
import { useState } from "react";

const ControlledComponentsExample = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(""); // Fixed typo here
    const [pwd, setPwd] = useState("");
    const [pwdError, setPwdError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        // Fixing validation logic
        if (name.length < 5) { // Change > to <
            setNameError("Name must be at least 5 characters long");
            valid = false;
        } else {
            setNameError("");
        }

        if (pwd.length < 5) { // Change > to <
            setPwdError("Password must be at least 5 characters long");
            valid = false;
        } else {
            setPwdError("");
        }

        if (valid) {
            console.log({ name, pwd });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "pwd") {
            setPwd(value);
        }
    };

    return (
        <div>
            <h1>Controlled Components Example</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} name="name" onChange={handleChange} />
                    {nameError && <span style={{ color: "red" }}>{nameError}</span>}
                    <br />
                </label>

                <label>
                    Password:
                    <input type="password" value={pwd} name="pwd" onChange={handleChange} />
                    {pwdError && <span style={{ color: "red" }}>{pwdError}</span>}
                    <br />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ControlledComponentsExample;
