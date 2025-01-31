
import { useState } from "react";

const Formvalidation = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const [name, setName] = useState("");
    const [errorName, setErrorName] = useState("");

    const [number, setNumber] = useState("");
    const [numberError, setNumberError] = useState("");

    const validateEmail = () => {
        if (!email.includes("@")) {
            setError("Invalid email");
        } else {
            setError("");
        }
    };

    const validateName = () => {
        if (name.length < 5) {
            setErrorName("Name should be at least 5 characters long");
        } else {
            setErrorName("");
        }
    };

    const validateNumber = () => {
        if (isNaN(number) || number.trim() === "") {
            setNumberError("Please enter a valid number");
        } else {
            setNumberError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        validateEmail();
        validateName();
        validateNumber();



        if (!error && !errorName && !numberError) {
            alert("Form submitted successfully");

        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            validateName();
                        }}
                    />
                    {errorName && <p style={{ color: "red" }}>{errorName}</p>}
                </div>

                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail();
                        }}
                    />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </div>

                <div>
                    <label>Number: </label>
                    <input
                        type="text"
                        value={number}
                        onChange={(e) => {
                            setNumber(e.target.value);
                            validateNumber();
                        }}
                    />
                    {numberError && <p style={{ color: "red" }}>{numberError}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Formvalidation;
