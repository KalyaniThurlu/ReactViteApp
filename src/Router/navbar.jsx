
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./navbar.css";
import { ShoppingCart } from "./shopping-cart";
import { MemoryGame } from "./memory";
import { TextFormatter } from "./text-formatter";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <div>
        <header className="d-flex justify-content-center align-items-center text-white p-3" style={{ backgroundColor: "lightblue" }}>
          <i
            className="bi bi-list humberger me-3"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          ></i>
          <h1 className="me-auto"></h1>
        </header>

        <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <span>
            <Link to="/shopping-cart" onClick={handleClick}>CRUD</Link>

          </span>
          <span><Link to="/memory" >Memory-Game</Link></span>
          <span><Link to="/text-formatter">Text-Formatter</Link></span>
        </nav>

        <main>
          <Routes>
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/memory" element={<MemoryGame/>} />
            <Route path="/text-formatter" element={<TextFormatter/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
