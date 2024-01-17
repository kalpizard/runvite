import React from "react";

const ControlMetas = ({
  meta,
  tareas,
  setTareas,
  setMeta, // Asegúrate de que setMetas se pasa como prop
  setIsValidMeta
}) => {
  const handleResetApp = () => {
    const resultado = window.confirm("¿VOLVER A COMENZAR?");
    if (resultado) {
      setTareas([]);
      setMeta("");
      setIsValidMeta(false);
    }
  };

  return (
    <div className="contenedor-meta-dos-columnas">
      <div>
        <p>Barra de progreso</p>
      </div>
      <div className="contenido-meta">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          REINICIAR
        </button>
        <p>
          <span>En progreso: </span>
          {meta}
        </p>
      </div>
    </div>
  );
};

export default ControlMetas;

//FUNCIONA SIN SET METAS
// // ControlMetas.js

// import React from "react";

// const ControlMetas = ({
//   meta,
//   tareas,
//   setTareas,

//   setMetas,
// }) => {

//  const handleResetApp = () => {
//     const resultado = confirm('¿VOLVER A COMENZAR?')
//     if(resultado){
//       // console.log('si');
// setTareas([])
// setMetas('')

//     } else{
// console.log('no');

//     }
//   };

//   return (
//     <div className="contenedor-meta-dos-columnas">
//       <div>
//         <p>Barra de progreso</p>
//       </div>
//       <div className="contenido-meta">
//         <button className="reset-app" type="button" onClick={handleResetApp}>
//           REINICIAR
//         </button>
//         <p>
//           <span>En progreso: </span>
//           {meta}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ControlMetas;

// // ControlMetas.js
// import React from "react";
// const ControlMetas = ({ meta }) => {
//   return (
//     <div className="contenedor-meta-dos-columnas">
//       <div>
//         <p>Barra de progreso</p>
//       </div>
//       <div className="contenido-meta">
//         <p>
//           <span>En progreso: </span>
//           {meta}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ControlMetas;

// import React from 'react'

// const ControlMetas = () => {
//   return (
//     <div className='' >
//   <div>
//   <p>Barra de progreso</p>

//   </div>
// <div>
//     <p>
//         <span>Presupuesto: </span> ${meta}

//     </p>
// </div>

//     </div>
//   )
// }

// export default ControlMetas
// import React from 'react';

// const ControlMetas = ({ meta }) => {
//   return (
//     <div className=''>
//       <div>
//         <p>Barra de progreso</p>
//       </div>
//       <div>
//         <p>
//           <span>En progreso: </span> ${meta}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ControlMetas;

// import React from 'react';

// const ControlMetas = ({ meta }) => {
//   return (
//     <div className=''>
//       <div>
//         <p>Barra de progreso</p>
//       </div>
//       <div>
//         <p>
//           <span>En progreso: </span> ${meta}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ControlMetas;
