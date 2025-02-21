
// src/projects/Exprojects.jsx
import { Link } from "react-router-dom";

export function Exprojects() {
  const projects = [
    {
      title: 'Weather App',
      description: 'A web application that displays weather data using OpenWeather API.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVfJxyTIurC7ghyuTuceMEGc3s8TQlSk9pw&s',
    },
    {
      title: 'To-Do List',
      description: 'A simple to-do list application to manage tasks.',
      image: 'https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg',
    },
    {
      title: 'Personal Blog',
      description: 'A blog site to share articles and tutorials.',
      image: 'https://iimskills.com/wp-content/uploads/2019/05/What-Are-Benefits-of-Setting-Up-Personal-Blog.png',
    },
  ];

  return (
    <div>
      <h1 className="d-flex justify-content-center align-items-center bg-dark text-white">Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-sm-12 col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <img 
                className="card-img-top" 
                src={project.image} 
                alt={project.title} 
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/home" className="btn btn-primary">back to home</Link>
    </div>
  );
}


