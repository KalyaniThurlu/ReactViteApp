
import { useState } from "react";

export function Employee() {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");

  const [pwd, setPwd] = useState("");
  const [errorPwd, setErrorPwd] = useState("");

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const [number, setNumber] = useState("");
  const [errorNumber, setErrorNumber] = useState("");

  const [technology, setTechnology] = useState("");
  const [errortechnology, seterrortechnology] = useState("");

  function validateForm() {
    let valid = true;

  
    
    if (name.length < 4) {
      setErrorName("Name must be at least 4 characters long");
      valid = false;
    } else {
      setErrorName("");
    }

    
    if (pwd.length < 6) {
      setErrorPwd("Password must be at least 6 characters long");
      valid = false;
    } else {
      setErrorPwd("");
    }

    
   
    const emailPattern = /^[A-Za-z0-9]{1,14}@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    if (!email.match(emailPattern)) {
      setErrorEmail("Invalid email format");
      valid = false;
    } else {
      setErrorEmail("");
    }


    
    const numberPattern = /^\+91\d{10}$/;
    if (!number.match(numberPattern)) {
      setErrorNumber("Phone number must start with +91 and have 10 digits");
      valid = false;
    } else {
      setErrorNumber("");
    }

    
    if (!technology) {
      seterrortechnology("technology is required");
      valid = false;
    } else {
      seterrortechnology("");
    }

    return valid;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      alert("Form validated successfully!");

   
      
      setName("");
      setPwd("");
      setEmail("");
      setNumber("");
      setTechnology("");

      console.log({
        name,
        pwd,
        email,
        number,
        technology,
      });
    }
  }

  return (
    <div className="container-fluid "  >
      <h2>Employee Registration form</h2>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>Name:</dt>
          <dd>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errorName && <p style={{ color: "red" }}>{errorName}</p>}
          </dd>

          <dt>Password:</dt>
          <dd>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            {errorPwd && <p style={{ color: "red" }}>{errorPwd}</p>}
          </dd>

          <dt>Email:</dt>
          <dd>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
          </dd>

          <dt>Phone Number:</dt>
          <dd>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            {errorNumber && <p style={{ color: "red" }}>{errorNumber}</p>}
          </dd>

          <dt>Technology:</dt>
          <dd>
            <select
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
            >
              <option value="">technology</option>
              <option value="HR">Java</option>
              <option value="Engineering">java</option>
              <option value="Sales">Front End</option>

            </select>
            {errortechnology && (
              <p style={{ color: "red" }}>{errortechnology}</p>
            )}
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
