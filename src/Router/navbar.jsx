
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./navbar.css";
import { ShoppingCart } from "./shopping-cart";

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
        </nav>

        <main>
          <Routes>
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
