
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import {  TodoList } from "./to-do-list.jsx";
import "./curd.css"

export function Curd1() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <BrowserRouter>
            <div>
                {/* Header Section */}
                <header className="d-flex justify-content-center align-items-center text-white  p-3">
                    <i className="bi bi-list humberger me-3" onClick={handleClick} style={{ cursor: "pointer" }}></i>
                    <h1 className="me-auto"></h1>
                </header>

                {/* Sidebar Navigation */}
                <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
                  
                  <span><Link to="/to-do-list">Todo_List</Link></span>
                </nav>

                {/* Main Content */}
                <main className="main-content">
                    <Routes>
                        <Route path="/to-do-list" element={< TodoList/>} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

