
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { About } from './about';
import { Exprojects } from './projects';
import { Exskills } from './skills'; 
import { Contact } from './contact';



export function Exhome() {
  return (
    <Router>
     
     
    
    
      <header className="d-flex justify-content-end between align-items-center bg-warning p-3 m-3">
        {/* Using Link components for navigation */}
   
   
        <h1 className="" style={{ marginRight:"auto" }}>Portfolio</h1>
  
        <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
        <Link to="/projects" style={{ margin: '0 10px' }}>Projects</Link>
        <Link to="/skills" style={{ margin: '0 10px' }}>Skills</Link>
        <Link to="/contact" style={{margin:"0 10px"}}>contact me</Link>
      </header>
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Exprojects />} />
        <Route path="/skills" element={<Exskills />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/" element={<h2>Home Page</h2>} />
      </Routes>
    </Router>
  );
}
