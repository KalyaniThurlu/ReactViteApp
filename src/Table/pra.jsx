
import { useState } from "react";

export function Pra() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [mailError, setMailError] = useState("");

  const [number, setNumber] = useState("");
  const [errorNumber, setErrorNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let valid = true;

    // Name validation
    if (name.length < 5) {
      setNameError("Name must be at least 5 characters.");
      valid = false;
    } else {
      setNameError("");
    }

    // Email validation
    if (!email.includes("@")) {
      setMailError("Invalid email address.");
      valid = false;
    } else {
      setMailError("");
    }

    // Phone number validation
    const numberPattern = /^\+91\d{10}$/;
    if (!number.match(numberPattern)) {
      setErrorNumber("Phone number must be in the format +91XXXXXXXXXX.");
      valid = false;
    } else {
      setErrorNumber("");
    }

    if (valid) {
      alert("Form submitted successfully!");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "number") {
      setNumber(value);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
          {mailError && <p style={{ color: "red" }}>{mailError}</p>}
        </div>
        <div>
          <input
            type="text"
            name="number"
            placeholder="Enter your phone number"
            value={number}
            onChange={handleChange}
          />
          {errorNumber && <p style={{ color: "red" }}>{errorNumber}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
