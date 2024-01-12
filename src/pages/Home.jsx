

// COMPONENTE PRINCIPAL DEL NAVBAR
import React from "react";
import NuevaMeta from "../components/NuevaMeta";
import ControlMetas from "../components/ControlMetas";

//EXTRACCION DE LOS 
const Home = ({
  meta, 
  setMeta,
  isValidMeta,
  setIsValidMeta 
}) => {


  
  return (
    <header>
      <h1>PLANIFICA TU META CON VROAD</h1>
      {isValidMeta ? (
        // COMPONENTE DE CONTROL DE META
        <ControlMetas
        meta={meta}
        
        
        
        />
      ) : (

        // COMPONENTE NUEVA META EN EL NAVBAR
        <NuevaMeta
          meta={meta} 
          setMeta={setMeta} 
          isValidMeta={isValidMeta}
          setIsValidMeta={
            
            
            
            
            setIsValidMeta}
        />
      )}
    </header>
  );
};

export default Home;















// // export default Home;
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Usado from '.components/Usado'


// function Home() {
//   const location = useLocation();

//   return (
//     <div>
//       <h1>Home aquí</h1>
//       {/* Otro contenido del componente */}
//       <Usado />
//     </div>
//   );
// }




// import React, { useState } from "react";

// import Meta from "../components/NuevaMeta";

// function Home = ({ meta, setMeta}) => {
//   return (
//     <header>
//       <h1>Home aquí</h1>
//       {/* Otro contenido del componente */}
//       <Meta 
//         meta={meta}
//         setMeta={setMeta}
//       />
//     </header>
//   );
// }

// Home.js