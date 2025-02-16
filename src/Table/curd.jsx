
import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import {  TodoList } from "./to-do-list.jsx";
import "./curd.css"
import { VowelConsonantChecker } from "./vowel.jsx";
import { TemperatureConvert } from "./TemperatureConvert.jsx";
import { SimpleAuthentication } from "./Authenticated.jsx";
import { Localchart } from "./localchat.jsx";
import { ExAge } from "./Age_calculator.jsx";
import FlashcardsApp from "./flashcardApp.jsx";
import { ExpenseTracker } from "./expense_traker.jsx";
import { RandomColorGenerator } from "./Random_color_Genator.jsx";
import { PomodoroTimer } from "./pomodoro-timer.jsx";
import { SocialMediaPost } from "./social-media-post.jsx";
import { Employeedirectory } from "./employee_directory.jsx";
import { WhackAMole } from "./wack-mole-game.jsx";
import { MathQuizApp } from "./mathquiz-app.jsx";






export function Curd1() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <BrowserRouter>
            <div>
               
               
                <header className="d-flex justify-content-center align-items-center text-white  p-3">
                    <i className="bi bi-list humberger me-3" onClick={handleClick} style={{ cursor: "pointer" }}></i>
                    <h1 className="me-auto"></h1>
                </header>

            
            
                <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
                  
                  <span><Link to="/to-do-list">Todo_List</Link></span>
                  <span><Link to="/vowel">vowel</Link></span>
                  <span><Link to="/TemperatureConvert">Temperature</Link></span>
                  <span><Link to="/Authenticated">Authetication</Link></span>
                  <span><Link to="/localchat">Local CahrtApp</Link></span>
                  <span><Link to="/Age_calender">Age_calculator</Link></span>
                  <span><Link to="/flashcardApp">FlashcardApp</Link></span>
                  <span><Link to="/expense_traker">Expense-Traker</Link></span>
                  <span><Link to="/Random_color_Genator">Random_Genarator</Link></span>
                  <span><Link to="/pomodoro-timer">Pomodoro-Timer</Link></span>
                  <span><Link to="/social-media-post">Social media post</Link></span>
                  <span><Link to="/ex">employee_directory</Link></span>
                  <span><Link to="/wack-a-mole-game">Wack-Mole-game</Link></span>
                  <span><Link to="/mathquiz-app">Mathquiz-App</Link></span>
                </nav>


            
            
                <main className="main-content">
                    <Routes>
                        <Route path="/to-do-list" element={< TodoList/>} />
                        <Route path="/vowel" element={<VowelConsonantChecker/>}/>
                        <Route path="/TemperatureConvert"  element={<TemperatureConvert/>}/>
                        <Route path="/Authenticated"  element={<SimpleAuthentication/>} />
                        <Route  path="/localchat"  element={<Localchart/>}/>
                        <Route path="/Age_calender"  element={<ExAge/>} />
                        <Route path="/flashcardApp" element={<FlashcardsApp/>} />
                        <Route path="/expense_traker" element={<ExpenseTracker/>} />
                        <Route path="/Random_color_Genator" element={<RandomColorGenerator/>} />
                        <Route path="/pomodoro-timer" element={<PomodoroTimer/>}/>
                        <Route  path="/social-media-post" element={<SocialMediaPost/>} />
                        <Route  path="/ex" element={<Employeedirectory/>} />
                        <Route path="/wack-a-mole-game" element={<WhackAMole/>} />
                        
                        <Route path="/mathquiz-app"  element={<MathQuizApp/>} />
                    </Routes>

                </main>
            </div>
        </BrowserRouter>
    );
}

