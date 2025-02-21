
import { useState } from "react";
import { Link } from "react-router-dom";

export function Contact() {
    const [username, setUsername] = useState("");
    const [errorName, setErrorName] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorPwd, setErrorPwd] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); 

       
        
        setErrorName("");
        setErrorPwd("");

      
        
        if (username === "") {
            setErrorName("Username cannot be empty");
        } else if (username.length < 5) {
            setErrorName("Username must be at least 5 characters long");
        } 

       
        
        else if (pwd === "") {
            setErrorPwd("Please enter a password");
        } else if (pwd.length < 4) { 
            
            setErrorPwd("Password must be at least 4 characters long");
        } else {
           
            
            setUsername("");
            setPwd("");
        }
    }

    function handleNameChange(e) {
        setUsername(e.target.value); 
    }

    function handlePwdChange(e) {
        setPwd(e.target.value); 
    }

    return (
        <div className="" style={{width:"300px", height:"200px", marginLeft:"30%"}}>
            <h1>Contact Form</h1>

            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input
                            type="text"
                            value={username}
                            onChange={handleNameChange}
                        />
                        {errorName && <p style={{ color: "red" }}>{errorName}</p>} 
                    </dd>
                </dl>
                <dl>
                    <dt>Password</dt>
                    <dd>
                        <input
                            type="password"
                            value={pwd}
                            onChange={handlePwdChange}
                        />
                        {errorPwd && <p style={{ color: "red" }}>{errorPwd}</p>} 
                        
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>

            <Link to="/home">Back to Home</Link>
        </div>
    );
}
