import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Logout from "./Logout";

function NavBar() {
  const [currUser, setCurrUser] = useState(localStorage.getItem("token") ?? "");

  return (
    <div>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/navbar/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/navbar/stats" className="nav-link">
              Stats
            </Link>
          </li>
          <li className="nav-options">
            <Link to="/navbar/options" className="nav-link">
              Options
            </Link>
          </li>
          <li className="nav-options">
            {currUser ? (
              <Logout />
            ) : (
              // Estructura que se muestra cuando currUser es null o undefined
              null
            )}
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Renderiza las rutas anidadas */}
    </div>
  );
}

export default NavBar;
