
import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors(""); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name) {
            setErrors("Name is required");
            return;
        }
        if (!formData.email) {
            setErrors("Email is required");
            return;
        }
        if (formData.password.length < 6) {
            setErrors("Password must be at least 6 characters");
            return;
        }

        console.log("Form Data Submitted:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            Name:<input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            {errors && <p style={{ color: "red" }}>{errors}</p>}
            <br />

            Email:<input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            {errors && <p style={{ color: "red" }}>{errors}</p>}
            <br />
            password:<input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            {errors && <p style={{ color: "red" }}>{errors}</p>}
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;
