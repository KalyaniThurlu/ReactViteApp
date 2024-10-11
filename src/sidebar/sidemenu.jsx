

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { SideMenu } from "./SideMenu";

function Sidemenu() {
  return (
    <Router>
      <Routes>
        {/* Define route for Dashboard */}
        <Route path="./dashboard" element={<Dashboard />} />
        
        {/* Define route for SideMenu */}
        <Route path="./sidemenu.jsx" element={<SideMenu />} />
      </Routes>
    </Router>
  );
}

export default Sidemenu;
