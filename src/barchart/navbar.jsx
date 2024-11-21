
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Piechart } from "./piechart";
import { ConvertAmount } from "./Amount_convert";
import "./navbar.css"

import { Cal1 } from "../calculator/calculator1";
import { Portfolio } from "../portpoliowebsite/portfolio";
import { Form1 } from "../validation/form";
import { Eximage } from "../image/image";
import Excurd from "../curd/curd";
import { Carousel } from "../carosuel/carousel";
import { Exradom } from "../Random_password/Random_Password";
import { StudentTable } from "../Table/table";
import { Curd } from "../Table/to-do-list.jsx";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <div>
     
     
        <header className="d-flex  justify-content-center align-items-center  text-white" style={{backgroundColor:"lightblue"}}>
      
      
          <i className="bi bi-list hamburger me-3 color-warnig" onClick={toggleMenu}></i>

          <h1 className="me-auto"></h1>
        </header>


        <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <span>
            <Link to="/piechart" onClick={toggleMenu}>
              Piechart
            </Link>
          </span>
          <span>
            <Link to="/Amount_convert" onClick={toggleMenu}>
              Convert Amount
            </Link>
          </span>

          <span><Link to="/calculator/calculator1" onClick={toggleMenu}>Calculator</Link></span>
          <span><Link to="/portpoliowebsite/portfolio" onClick={toggleMenu}>Portfolio</Link></span>
          <span><Link to="/validation/form"  onClick={toggleMenu}>Form Validation</Link></span>
    
          <span><Link to="/image/image" onClick={toggleMenu}>Image</Link></span>
          <span><Link to="/curd/curd" onClick={toggleMenu}>Crud</Link></span>
          <span><Link to="/carosuel/carousel">Carousel</Link></span>
          <span><Link to="/Random_password/Random_Password">RandomPassword</Link></span>
          <span><Link to="/Table/table">Table</Link></span>
          <span><Link to="/Table/student">Curd</Link></span>
        </nav>

     
     
        <main>
          <Routes>
            <Route path="/piechart" element={<Piechart />} />
            <Route path="/Amount_convert" element={<ConvertAmount />} />
            <Route path="/calculator/calculator1" element={<Cal1/>} />
            <Route path="/portpoliowebsite/portfolio" element={<Portfolio/>}/>
            <Route path="/validation/form" element={<Form1/>}/>
            <Route path="/image/image" element={<Eximage/>} />
          <Route path="/curd/curd" element={<Excurd/>} />
          <Route path="/carosuel/carousel"  element = {<Carousel/>}/>
          <Route path="/Random_password/Random_Password" element={<Exradom/>}/>
          <Route path="/Table/table" element={<StudentTable/>}/>
          <Route path="/Table/student" element={<Curd/>}/>
          
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
