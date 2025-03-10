import { useState } from "react";

const Formvalidation = () => {
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (name.length < 5) {
            setNameError("enter valida name")
            valid = false;

        } else {
            setNameError("")
        }

        if (password.length < 4) {
            setPasswordError("password  atleast 4 characters")
            valid = false;
        } else {
            setPasswordError("")
        }
        if (valid) {
            console.log({ name, password })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "name") {
            setName(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    return (
        <div>
            <h1>validation</h1>

            <form action="" onSubmit={handleSubmit}>


                <div>
                    Name: <input type="text" name="name" value={name} onChange={handleChange} /><br />
                    {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                </div>
                <div>
                    Password: <input type="text" name="password" value={password} onChange={handleChange} /><br />
                    {passwordError && < p style={{ color: "red" }}>{passwordError}</p>}
                </div>
                <button >submit</button>
            </form>
        </div>
    )
}
export default Formvalidation;