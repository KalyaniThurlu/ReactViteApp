
import { useState } from "react";

const ControlledComponentsEx = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdError, setPwdError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 
    let valid = true;

    if (name.length < 5) { 
      setNameError("Must be at least 5 characters");
      valid = false;
    } else {
      setNameError("");
    }

    if (pwd.length < 5) { 
      setPwdError("Must be at least 5 characters");
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
        <h1>Controlled Components Example</h1>
        
        <div>
          Name:  
          <input type="text" value={name} name="name" onChange={handleChange} />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        </div>
        
        <div>
          Password:  
          <input type="password" value={pwd} name="pwd" onChange={handleChange} />
          {pwdError && <p style={{ color: "red" }}>{pwdError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledComponentsEx;
