import React, { useState } from "react";
import { formatearFecha } from "../components/helpers";
import Profile from "../components/Profile";
import { useLocation } from "react-router-dom"; // Asegúrate de importar useLocation

const NuevaMeta = ({
  nombreUsuario,
  setNombreUsuario,
  meta,
  setMeta,
  setIsValidMeta,
  fecha,
}) => {
  const [mensaje, setMensaje] = useState("");
  const regex = /^[A-Za-záéíóúÁÉÍÓÚ\s]{3,}$/;
  const regixUser = /^[a-zA-Z0-9_]{3,16}$/;

  const location = useLocation(); // Obtén la ubicación actual

  const handleMeta = (e) => {
    e.preventDefault();

    if (!regex.test(meta) || !regixUser.test(nombreUsuario)) {
      setMensaje("No es una meta válida");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }

    setMensaje("");
    setIsValidMeta(true);
  };

  return (
    <div className="contenedor-meta">
      <form className="formulario" onSubmit={handleMeta}>
        <div className="campo">
          <label htmlFor="usuarioInput">Cual es tu nombre:</label>
          <input
            className="nueva-meta"
            type="text"
            placeholder="añadi el nombre tuyo"
            id="userInput"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(String(e.target.value))}
          />

          <p className="fecha-gasto">
            Agregado el: <span>{formatearFecha(fecha)}</span>
          </p>
        </div>

        <div className="campo">
          <label htmlFor="metaInput">Definir Meta:</label>
          <input
            className="nueva-meta"
            type="text"
            placeholder="añade el nombre de la meta"
            id="metaInput"
            value={meta}
            onChange={(e) => setMeta(String(e.target.value))}
          />
          <p className="fecha-gasto">
            Agregado el: <span>{formatearFecha(fecha)}</span>
          </p>
        </div>

        <input type="submit" value="Añadir" />
        {mensaje}
      </form>

      {/* Renderiza el componente Profile solo si no estás en la ruta específica */}
      {location.pathname !== "/navbar/home" && (
        <Profile nombreUsuario={nombreUsuario} />
      )}
    </div>
  );
};

export default NuevaMeta;






// import React, { useState } from "react";
// import { formatearFecha } from "../components/helpers";
// import Profile from "../components/Profile";

// const NuevaMeta = ({
//   nombreUsuario,
//   setNombreUsuario,
//   meta,
//   setMeta,
//   setIsValidMeta,
//   fecha,
// }) => {
//   const [mensaje, setMensaje] = useState("");
//   const regex = /^[A-Za-záéíóúÁÉÍÓÚ\s]{3,}$/;
//   const regixUser = /^[a-zA-Z0-9_]{3,16}$/;

//   const handleMeta = (e) => {
//     e.preventDefault();

//     if (!regex.test(meta) || !regixUser.test(nombreUsuario)) {
//       setMensaje("No es una meta válida");
//       setTimeout(() => {
//         setMensaje("");
//       }, 3000);
//       return;
//     }

//     setMensaje("");
//     setIsValidMeta(true);
//   };

//   return (
//     <div className="contenedor-meta">
//       <form className="formulario" onSubmit={handleMeta}>
//         <div className="campo">
//           <label htmlFor="usuarioInput">Cual es tu nombre:</label>
//           <input
//             className="nueva-meta"
//             type="text"
//             placeholder="añadi el nombre tuyo"
//             id="userInput"
//             value={nombreUsuario}
//             onChange={(e) => setNombreUsuario(String(e.target.value))}
//           />

//           <p className="fecha-gasto">
//             Agregado el: <span>{formatearFecha(fecha)}</span>
//           </p>
//         </div>

//         <div className="campo">
//           <label htmlFor="metaInput">Definir Meta:</label>
//           <input
//             className="nueva-meta"
//             type="text"
//             placeholder="añade el nombre de la meta"
//             id="metaInput"
//             value={meta}
//             onChange={(e) => setMeta(String(e.target.value))}
//           />
//           <p className="fecha-gasto">
//             Agregado el: <span>{formatearFecha(fecha)}</span>
//           </p>
//         </div>

//         <input type="submit" value="Añadir" />
//         {mensaje}
//       </form>

//       {/* Aquí deberías pasar nombreUsuario como una prop a Profile */}
//       <Profile nombreUsuario={nombreUsuario} />
//     </div>
//   );
// };

// export default NuevaMeta;










// // NuevaMeta.js
// import React, { useState } from "react";
// import { formatearFecha } from "../components/helpers"; // Make sure to import formatearFecha
// // EXTRACION
// const NuevaMeta = ({
//   nombreUsuario,
//   setNombreUsuario,
//   meta,
//   setMeta,
//   setIsValidMeta,
//   fecha,
// }) => {
//   const [mensaje, setMensaje] = useState("");
//   const regex = /^[A-Za-záéíóúÁÉÍÓÚ\s]{3,}$/;
//   const regixUser = /^[a-zA-Z0-9_]{3,16}$/;

  
  

//   // FUNCION FUNCION PARA ADMINISTRAR
//   const handleMeta = (e) => {
//     e.preventDefault();
//     // AMBAS VALIDACIONES SON VALIDAS
//     if (!regex.test(meta) || !regixUser.test(nombreUsuario)) {
//       // En caso de no ser una configutacion inicial valida
//       setMensaje("No es una meta válida");
//       setTimeout(() => {
//         setMensaje("");
//       }, 3000);
//       // ROMPE EL CICLO
//       return;
//     }
//     setMensaje("");
//     setIsValidMeta(true);
//     // console.log(typeof nombreUsuario);
//   };



//   return (
//     <div className="contenedor-meta">
//       <form className="formulario" onSubmit={handleMeta}>
//         <div className="campo">
//           <label htmlFor="usuarioInput">Cual es tu nombre:</label>
//           <input
//             className="nueva-meta"
//             type="text"
//             placeholder="añadi el nombre tuyo"
//             id="userInput"
//             value={nombreUsuario}
//             // ACTUALIZA EL STATE
//             onChange={(e) => setNombreUsuario(String(e.target.value))}
//           />

//           <p className="fecha-gasto">
//             Agregado el: <span>{formatearFecha(fecha)}</span>
//           </p>
//         </div>

//         {/* /////////////////////////////////////////////////////// */}
//         <div className="campo">
//           <label htmlFor="metaInput">Definir Meta:</label>
//           <input
//             className="nueva-meta"
//             type="text"
//             placeholder="añade el nombre de la meta"
//             id="metaInput"
//             value={meta}
//             onChange={(e) => setMeta(String(e.target.value))}
//           />
//           <p className="fecha-gasto">
//             Agregado el: <span>{formatearFecha(fecha)}</span>
//           </p>
//         </div>

//         <input type="submit" value="Añadir" />
//         {mensaje}
//       </form>
//     </div>
//   );
// };

// export default NuevaMeta;
