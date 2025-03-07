
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdError, setPwdError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (name.length < 5) {
            setNameError("Name must be at least 5 characters long.");
            valid = false;
        } else {
            setNameError("");
        }

        if (pwd.length < 4) {
            setPwdError("Password must be at least 4 characters long.");
            valid = false;
        } else {
            setPwdError("");
        }

        if (valid) {
            console.log({ name, pwd });
        }
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "pwd") {
            setPwd(value);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name:
                    <input type="text" name="name" value={name} onChange={handleChange} />
                    {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                </div>
                <div>
                    Password:
                    <input type="password" name="pwd" value={pwd} onChange={handleChange} />
                    {pwdError && <p style={{ color: "red" }}>{pwdError}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
