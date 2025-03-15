import { useState } from "react";

const Formvalidation = () => {
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [pwd, setPwd] = useState("")
    const [pwdError, setPwdError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let valid = true;
        if (name.length < 6) {
            setNameError("name required")
            valid = false
        } else {
            setNameError("")
        }
        if (pwd.length < 6) {
            setPwdError("password required")
            valid = false
        } else {
            setPwdError("")
        }
        if (valid) {
            console.log({ name, pwd })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "name") {
            setName(value)
        } else if (name === "pwd") {
            setPwd(value)
        }
    }

    return (
        <div>

            <form action="" onSubmit={handleSubmit}>

                <div>
                    name:   <input type="text" name="name" value={name} onChange={handleChange} /><br />

                    {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                </div>
                <div>
                    pwd:   <input type="text" name="pwd" value={pwd} onChange={handleChange} /><br />
                    {pwdError && <p style={{ color: "red" }}>{pwdError}</p>}
                </div>
                <button>submit</button>

            </form>

        </div>
    )
}
export default Formvalidation;