
// src/pages/About.jsx
import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h1 className="d-flex align-items-center justify-content-center bg-dark p-2 m-3 text-white">
        About Me
      </h1>

      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <p className="col-md-6" style={{ marginLeft: "40%" }}>
            I am a passionate React.js developer with experience in building dynamic, responsive web applications.
            I specialize in creating reusable components and managing state efficiently using hooks like <code>useState</code>
            and <code>useEffect</code>. I enjoy solving complex problems and am always looking to improve my skills in modern web technologies.
          </p>
          <img
            className="img-fluid w-100"
            style={{ marginLeft: "10%" }}
            src="https://st3.depositphotos.com/1006354/33605/i/450/depositphotos_336050148-stock-photo-asian-sad-girl-looking-thinking.jpg"
            alt="Girl thinking"
          />
        </div>
      </div>
      <Link to="/">Home</Link> 
      
    </div>
  );
}
