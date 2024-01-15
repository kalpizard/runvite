// ControlMetas.js
import React from "react";
import NuevaMeta from "../components/NuevaMeta";

const ControlMetas = ({ meta }) => {
  return (
    <div className="contenedor-meta-dos-columnas">
      <div>
        <p>Barra de progreso</p>
      </div>
      <div className="contenido-meta">
        <p>
          <span>En progreso: </span>
          {meta}
        </p>
      </div>
    </div>
  );
};

export default ControlMetas;

















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
  
