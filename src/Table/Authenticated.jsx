
import { useState } from "react";

export function SimpleAuthentication() {
    const obj = { userName: "admin", password: "password123" };
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (userName === obj.userName && pwd === obj.password) {
            setIsAuthenticated(true);
            setError(""); 
        } else {
            setError("Invalid username or password");
        }
    }

    function handleOut() {
        setIsAuthenticated(false);
        setUserName("");
        setPwd("");
        setError(""); 
    }

    return (
        <div style={{marginTop:"30px",marginLeft:"30px"}}>
            <h1>SimpleAuthentication</h1>
            {!isAuthenticated ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        /><br/><br />
                    </div>
                    <div style={{gap:"5px",marginBottom:"5px"}}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                        /><br/><br />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
            ) : (
                <div>
                    <h1>Welcome {userName}</h1>
                    <button onClick={handleOut}>Logout</button>
                </div>
            )}
        </div>
    );
}
