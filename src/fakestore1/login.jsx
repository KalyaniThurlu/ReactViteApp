
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(['userid']);
    const navigate = useNavigate();

    const handleChange = (e) => setUserId(e.target.value);
    const changePwd = (e) => setPassword(e.target.value);

    const handleClick = () => {
        if (userId === "john") { 
            setCookie("userid", userId, { path: "/", maxAge: 3600 });
            navigate("/fakestorecategories");
        } else {
            navigate("/error");
        }
    };

    return (
        <div>
            <h2>Custom Login</h2>
            <label>User ID</label>
            <input type="text" onChange={handleChange} /><br /><br />
            <label>Password</label>
            <input type="password" onChange={changePwd} /><br /><br />
            <button onClick={handleClick} className="btn btn-primary mx-5">Submit</button>
        </div>
    );
}
