
import React from "react";
import NuevaMeta from "../components/NuevaMeta";
import ControlMetas from "../components/ControlMetas";


const Home = ({
  meta,
  setMeta,
  isValidMeta,
  setIsValidMeta,
  nombreUsuario,
  setNombreUsuario,
}) => {
  return (
    <header>
      <h1>PLANIFICA TU META CON VROAD</h1>
      {isValidMeta ? (
        <div>
          <ControlMetas meta={meta} />
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













































