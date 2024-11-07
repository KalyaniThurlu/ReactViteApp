
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { ExMenu } from "./menu";
import { Odersummry } from "./ordersummry";
import { Form } from "./orederform";

export function Homes() {
  return (
    <Router>
      <header className="d-flex justify-content-end align-items-center bg-dark text-white ">
        <Link to="/menu" className="text-white me-3">Menu</Link>
        <Link to="/ordersummry" className="text-white me-3">Summary</Link>
        <Link to="/orderform" className="text-white">Form</Link>
      
      </header>
      <Routes>
        <Route path="/menu" element={<ExMenu />} />
        <Route path="/ordersummry" element={<Odersummry />} />
        <Route path="/orderform" element={<Form />} />
      </Routes>
    </Router>
  );
}
