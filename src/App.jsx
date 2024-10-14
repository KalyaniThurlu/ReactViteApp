
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SideMenu } from "./Appbar/sidemenu";
import { Dashboard } from "./Appbar/dashboard";
import { Followers } from "./Appbar/Followers";

function App() {
  return (
    <Router>
      <div>
        {/* SideMenu that contains Links */}
        <SideMenu />

        {/* Routes for navigation */}
        <Routes>
          <Route path="./Appbar/dashboard.jsx" element={<Dashboard />} />
          <Route path="./Appbar/Followers.jsx" element={<Followers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
