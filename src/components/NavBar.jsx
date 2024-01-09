// // NavBar.js
// import React from "react";
// import { Outlet, Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <div>
//       <nav className="header">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="stats">Stats</Link>
//           </li>
//         </ul>
//       </nav>
//       <Outlet /> {/* Renderiza las rutas anidadas */}
//     </div>
//   );
// }

// export default NavBar;


// NavBar.js





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
      <Link to="stats" className="nav-link">Stats</Link>
    </li>
  </ul>
</nav>

      <Outlet /> {/* Renderiza las rutas anidadas */}
    </div>
  );
}

export default NavBar;
