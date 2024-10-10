
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About } from './about.jsx';
import { Contact } from './contact.jsx';
import { Services } from './services.jsx';
import { Home } from './home.jsx';
import { Navbar } from './navbar.jsx';

export function Indexpage() {
    return (
        <BrowserRouter>
            <Navbar /> {/* Navbar should be rendered outside of the Routes for consistent navigation */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </BrowserRouter>
    );
}
