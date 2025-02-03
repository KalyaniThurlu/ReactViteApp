
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import axios from "axios";

import './hamburger.css';
import { Dashboard } from "./dashboard";
import { Followers } from "./followers";
import { Following } from "./following";
import { Repositories } from "./repositories";

export function Home1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(null);
      setLoginSuccess(true);
    } catch (error) {
      setUserData(null);
      setError("User not found");
      setLoginSuccess(false);
      console.log(error);
    }
  };

  const handleClear = () => {
    setUsername("");     
    setUserData(null);   
    setError(null);      
    setLoginSuccess(false); 
    
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <header className="d-flex align-items-center">
          <i className="bi bi-list hamburger me-3" onClick={toggleMenu}></i>

          <h1 className="me-auto"></h1>

          <div className="search-container d-flex text-end">
            <input
              type="text"
              placeholder="Enter username"
              className="form-control me-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {username && (
              <span onClick={handleClear} className="me-2" style={{ cursor: 'pointer' }}>
                <i className="bi bi-x-circle text-muted"></i> {/* Cancel icon */}
              </span>
            )}
            <span onClick={handleSearch}>
              <i className="bi bi-search text-warning me-2"></i> 
            </span>
          </div>
        </header>

        <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <span>
            <Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link>
          </span>
          <span>
            <Link to="/followers" onClick={toggleMenu}>Followers</Link>
          </span>
          <span>
            <Link to="/following" onClick={toggleMenu}>Following</Link>
          </span>
          <span>
            <Link to="/repositories" onClick={toggleMenu}>Repositories</Link>
          </span>
        </nav>

        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/following" element={<Following />} />
            <Route path="/repositories" element={<Repositories />} />
          </Routes>

       
       
          {userData && (
            <div className="user-info mt-4">
              <h2>{userData.name}</h2>
              <p><strong>Username:</strong> {userData.login}</p>
              <p><strong>Followers:</strong> {userData.followers}</p>
              <p><strong>Following:</strong> {userData.following}</p>
              <p><strong>Public Repos:</strong> {userData.public_repos}</p>
              <img src={userData.avatar_url} alt={`${userData.login} avatar`} width="100" />
            </div>
          )}

        
        
          {loginSuccess && <p className="text-success mt-4">Login successful</p>}

        
        
          {error && <p className="text-danger mt-4">{error}</p>}
        </main>
      </div>
    </BrowserRouter>
  );
}
