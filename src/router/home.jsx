
import  { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";




import './hamburger.css'; 
import { Dashboard } from "./dashboard";
import { Followers } from "./followers";
import { Following } from "./following";
import { Repositories } from "./repositories";



export function Home1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   function toggleMenu () {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
      
      
          <span className="hamburger" onClick={toggleMenu}>
            &#9776;
          </span>

          <h1>This is the Home Page</h1>
        </header>

      
      
        <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <span>
            <Link to="/dashboard" onClick={toggleMenu}>dashboard</Link>
          </span>
          <span>
            <Link to="/followers" onClick={toggleMenu}>followers</Link>
          </span>
          <span><Link to="/following" onClick={toggleMenu}>following</Link></span>
          <span><Link to="/repositories" onClick={toggleMenu}>Repositories</Link></span>
        </nav>

        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/followers" element={<Followers/>} />
            <Route path="/following" element={<Following/>} />
          
          <Route path="/repositories" element={<Repositories/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
