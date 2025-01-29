
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./navbar.css";
import { ShoppingCart } from "./shopping-cart";
import { MemoryGame } from "./memory";
import { TextFormatter } from "./text-formatter";
import { Numbers } from "./guess-number";
import { Diary } from "./diary";
import { FlashcardApp } from "./flashcard"
import Counter from "./counter";
import CrudApp from "./Curd";
import Count from "./state"
import Exfun from "./props";
import Exhooks from "./hooks";
import ApiExample from "./Api";




export function Navbar1() {
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
          <span><Link to="/guess-number">Guess-Number</Link></span>
          <span><Link to="/dairy">Local-storage</Link></span>
          <span><Link to="/flashcard">flashcard</Link></span>
          <span><Link to="/counter">Counter</Link></span>
          <span><Link to="/Curd">Curd</Link></span>
          <span><Link to="/state">state</Link></span>
          <span><Link to="/props">props</Link></span>
          <span><Link to="/hooks">hooks</Link></span>
          <span><Link to="/Api">Api</Link></span>
          

        </nav>

        <main>
          <Routes>
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/memory" element={<MemoryGame />} />
            <Route path="/text-formatter" element={<TextFormatter />} />
            <Route path="/guess-number" element={<Numbers />} />
            <Route path="/dairy" element={<Diary />} />
            <Route path="/flashcard" element={<FlashcardApp />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/Curd" element={<CrudApp />} />
            <Route path="/state" element={<Count />} />
            <Route path="/props" element={<Exfun />} />
            <Route path="/hooks" element={<Exhooks />} />
            <Route path="/Api" element={<ApiExample />} />
        
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
