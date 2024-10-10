
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function CustomerLogin() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie] = useCookies(['userid']); // You can remove removeCookie if not used

    let navigate = useNavigate();

    function handleIdChange(e) {
        setUserId(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleLoginClick() {
        // Check for the correct userId (you may want to check the password too)
        if (userId === "john_nit") {
            // Set the cookie with options
            setCookie("userid", userId, { path: '/', maxAge: 3600 }); // Expires in 1 hour
            navigate("/categories");
        } else {
            navigate("/error");
        }
    }

    return (
        <div>
            <h3>Customer Login</h3>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={handleIdChange} /></dd>
                <dt>Password</dt>
                <dd><input type="password" onChange={handlePassword} /></dd>
            </dl>
            <button onClick={handleLoginClick} className="btn btn-primary">Login</button>
        </div>
    );
}
