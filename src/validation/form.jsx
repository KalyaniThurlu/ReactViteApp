
import { useState } from "react";

export function Form1() {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");

  const [pwd, setPwd] = useState("");
  const [errorPwd, setErrorPwd] = useState("");

  const [number, setNumber] = useState("");
  const [errorNumber, setErrorNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let valid = true;

 
    
    if (name.length <= 5) {
      setErrorName("Name must be at least 6 characters.");
      valid = false;
    } else if (name.toLowerCase() === "john") {
      setErrorName("Name 'John' is not allowed.");
      valid = false;
    } else {
      setErrorName("");
    }

    
    if (pwd.length <= 6) {
      setErrorPwd("Password must be at least 6 characters.");
      valid = false;
    } else {
      setErrorPwd("");
    }

   
    
    const numberPattern = /^\+91\d{10}$/;
    if (!number.match(numberPattern)) {
      setErrorNumber("Mobile number must start with +91 and be 10 digits.");
      valid = false;
    } else {
      setErrorNumber("");
    }

    if (valid) {
      alert("Form submitted successfully!");
      console.log({ name, pwd, number });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "pwd") {
      setPwd(value);
    } else if (name === "number") {
      setNumber(value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <dl>
      <h2>Form Validation</h2>
        <dt>Name:</dt>
        <dd>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          {errorName && <p style={{ color: "red" }}>{errorName}</p>}
        </dd>

        <dt>Password:</dt>
        <dd>
          <input
            type="password"
            name="pwd"
            value={pwd}
            onChange={handleChange}
          />
          {errorPwd && <p style={{ color: "red" }}>{errorPwd}</p>}
        </dd>

        <dt>Mobile Number:</dt>
        <dd>
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleChange}
          />
          {errorNumber && <p style={{ color: "red" }}>{errorNumber}</p>}
        </dd>
      </dl>

      <button type="submit">Submit</button>
    </form>
  );
}
