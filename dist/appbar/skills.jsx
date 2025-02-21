


import { Link } from "react-router-dom";

export function Exskills() {
    const skills = [
        "HTML", "CSS", "JavaScript", "React.js"
    ];
    
    return (
        <div>
            <h1 className="d-flex align-items-center justify-content-center bg-info text-white">
                <Link to="/skills" className="text-white text-decoration-none">
                    Skills
                </Link>
            </h1>

            <ul className="me-2 p-2" style={{ marginLeft: "40%", width: "150px" }}>
                {skills.map((skill, index) => (
                    <li key={index} className="mx-2" style={{ marginLeft: "10px" }}>
                        {skill}
                    </li>
                ))}
            </ul>
            <Link to="/home" className="btn btn-primary">back to home</Link>
        </div>
    );
}
