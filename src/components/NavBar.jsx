




// NavBar.js
import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <nav className="navigation">
  <ul className="nav-list">
    <li className="nav-item">
      <Link to="/navbar/home" className="nav-link">Home</Link>
    </li>
    <li className="nav-item">
      <Link to="/navbar/stats" className="nav-link">Stats</Link>
    </li>
    <li className="nav-options">
      <Link to="/navbar/options" className="nav-link">options</Link>
    </li>
  </ul>
</nav>

      <Outlet /> {/* Renderiza las rutas anidadas */}
    </div>
  );
}

export default NavBar;
