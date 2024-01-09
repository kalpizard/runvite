// // Home.js
// import React from "react";

// function Home() {
//   return (
//     <div>
//       <h1>Home aquí</h1>
//     </div>
//   );
// }

// export default Home;

// Home.js
// import React from "react";
// import { useLocation } from "react-router-dom";

// function Home() {
//   const location = useLocation();

//   return (
//     <div>
//       <h1>Home aquí</h1>
//       <p>Ruta actual: {location.pathname}</p>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Home() {
  const location = useLocation();

  return (
    <div>
      <h1>Home aquí</h1>
      {/* <p>Ruta actual: {location.pathname}</p> */}
    </div>
  );
}

export default Home;
