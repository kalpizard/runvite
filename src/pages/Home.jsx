
import React, { useEffect, useState } from "react";
import NuevaMeta from "../components/NuevaMeta";
import ControlMetas from "../components/ControlMetas";

import Footer from "../components/Footer";
const Home = ({
  meta,
  setMeta,
  isValidMeta,
  setIsValidMeta,
  nombreUsuario,
  setNombreUsuario,
  setTareas
}) => {
//USEFECT jalar metas y tareas del usuario 
//get al backend y paso el id del usuario, debe estar autenticado 

  return (
    <header>
      <h1>PLANIFICA TU META CON VROAD</h1>
      {isValidMeta ? (
        <div>
          <ControlMetas
          nombreUsuario={nombreUsuario}
          setNombreUsuario={setNombreUsuario}
           tareas={setTareas}
           setTareas={setTareas}
           meta={meta} 
           setMeta={setMeta}
           setIsValidMeta={setIsValidMeta}
           />
        </div>
      ) : (
        <NuevaMeta
          nombreUsuario={nombreUsuario}
          setNombreUsuario={setNombreUsuario}
          meta={meta}
          setMeta={setMeta}
          isValidMeta={isValidMeta}
          setIsValidMeta={setIsValidMeta}
          
        />
       
      )}
    </header>
    

  );
};

export default Home;










// import React from "react";
// import NuevaMeta from "../components/NuevaMeta";
// import ControlMetas from "../components/ControlMetas";
// import Profile from "../components/Profile";

// const Home = ({
//   meta,
//   setMeta,
//   isValidMeta,
//   setIsValidMeta,
//   nombreUsuario,
//   setNombreUsuario,
// }) => {
//   return (
//     <header>
//       <h1>PLANIFICA TU META CON VROAD</h1>
//       {isValidMeta ? (
//         <div>
    
//           <ControlMetas meta={meta} />
//         </div>
//       ) : (
//         <NuevaMeta
//           // nombreUsuario={nombreUsuario}
//           // setNombreUsuario={setNombreUsuario}
//           meta={meta}
//           setMeta={setMeta}
//           isValidMeta={isValidMeta}
//           setIsValidMeta={setIsValidMeta}
//         />
//       )}
//     </header>
//   );
// };

// export default Home;








// // COMPONENTE PRINCIPAL DEL NAVBAR
// import React from "react";
// import NuevaMeta from "../components/NuevaMeta";
// import ControlMetas from "../components/ControlMetas";
// import Profile from "../components/Profile";
// //EXTRACCION DE LOS 
// const Home = ({
//   meta, 
//   setMeta,
//   isValidMeta,
//   setIsValidMeta,
//   nombreUsuario,
// setNombreUsuario
// }) => {


  
//   return (
//     <header>
//       <h1>PLANIFICA TU META CON VROAD</h1>
//       {isValidMeta ? (



//         // COMPONENTE DE CONTROL DE META
     
      


// <ControlMetas
//   meta={meta}
//   nombreUsuario={nombreUsuario}
//   // nombreUsuario={nombreUsuario}
// />






//       ) : (

//         // COMPONENTE NUEVA META EN EL NAVBAR
//         <NuevaMeta
//   nombreUsuario={nombreUsuario}
//   setNombreUsuario={setNombreUsuario}
//   meta={meta} 
//   setMeta={setMeta} 
//   isValidMeta={isValidMeta}
//   setIsValidMeta={setIsValidMeta}
// />
//       )}
//     </header>
//   );
// };

// export default Home;













































