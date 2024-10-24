import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./Dashboard"; // Ensure you use the correct file name casing

export function UserDetails() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <header>
                    <div>
                        <span>Dashboard</span>
                    </div>
                    <div>
                        <Link to="/dashboard">Home</Link>
                    </div>
                </header>
                <Routes>
                    {/* Use path without leading dot for route */}
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
