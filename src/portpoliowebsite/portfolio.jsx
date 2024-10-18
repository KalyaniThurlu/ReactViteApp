


import "./styles/portfolio.css"; 
export function Portfolio() {
  const projects = [
    {
      title: 'Weather App',
      description: 'A web application that displays weather data using OpenWeather API.',

      
      image: 'https://play-lh.googleusercontent.com/WHVv_pVDetZqwAsjUAdRfEXe1RFXJ__39sHlIHDsRpNPwAL_9FXVrrnOfV3_cSccJes=w600-h300-pc0xffffff-pd' 
    },
    {
      title: 'To-Do List',
      description: 'A simple to-do list application to manage tasks.',
   
      
      image: 'https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg' 
    },
    {
      title: 'Personal Blog',
      description: 'A blog site to share articles and tutorials.',
      
      image: 'https://iimskills.com/wp-content/uploads/2019/05/What-Are-Benefits-of-Setting-Up-Personal-Blog.png' 
      
    },
  ];

  const skills = ['Html', 'Css', 'Bootstrap', 'React.Js'];

  return (
    <div>
      <header className="d-flex justify-content-end mx-2 bg-dark p-2 m-2 text-white">
      
      
        <h1 className="" style={{margin:"auto"}}>portfolio</h1>
        <a href="#about" className="mx-2">About</a>
      
      <a href="#projects" className="mx-2">projects</a>
      <a href="#skills" className="mx-2">skills</a>
       
       <a href="#contact-me">contant me</a>
      </header>

      <section id="about" className="d-flex row">
      <h2 className="w-100 text-center">About me</h2>
      <div className="col-6 d-flex align-items-center">
   
      <h1>
    I am a Frontend Developer
    <br />
    Passionate about creating interactive and responsive web applications. 
    With a strong foundation in JavaScript and React, I enjoy turning complex problems into simple, beautiful, and intuitive designs. 
  </h1>
  </div>
  <div className="col-6">
    <img
      src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
      alt="developer"
      style={{ width: '100%', height: 'auto' }} 
    />
  </div>



</section>

<section className="sec1 bg-dark d-flex flex-column p-2 m-2 text-white">
  <h2 className="w-100 text-center" id="projects">Projects</h2>
  <div className="row">
    <ul className="list-unstyled col-12 d-flex flex-wrap justify-content-center">
      {projects.map((project, index) => (
        <li key={index} className="col-12 col-sm-6 col-md-4 mb-4"> 
        
          <div className="card text-white bg-secondary h-100"> 
            
            <img 
              src={project.image} 
              alt={project.title} 
              className="card-img-top" 
              style={{ height: '200px', objectFit: 'cover' }} 
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
             
             
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
</section>

       
  
<h1 className="text-center" id="skills">Skills</h1>

<section className="sec2 d-flex flex-column bg-info w-50 mx-auto p-3" style={{ marginTop: "20px" }}>
  <h2 className="text-center">Skills</h2>
  <ul className="list-unstyled d-flex flex-wrap justify-content-center">
    {skills.map((skill, index) => (
      <li key={index} className="m-2 p-2 border rounded bg-light" style={{ width: 'fit-content' }}>
        {skill}
      </li>
    ))}
  </ul>
</section>
<section className="sec3">



<h2 className="text-center" id="contact-me">Contact Me</h2>
<footer className="text-center">
  <form className="contact-form p-3" onSubmit={(e) => e.preventDefault()}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" required />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id="email" required />
    </div>
    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea className="form-control" id="message" rows="4" required></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Send Message</button>
  </form>
  
</footer>

</section>
    </div>
  );
}


