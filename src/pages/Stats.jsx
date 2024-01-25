// Stats.js
import React, { useState, useEffect } from "react";
import { formatearFecha } from "../components/helpers";

const Stats = ({ tareas, fecha }) => {
  const [contadorTareas, setContadorTareas] = useState(0);

  useEffect(() => {
    // Actualiza el contador con la cantidad actual de tareas
    setContadorTareas(tareas.length);
  }, [tareas]);

  // Verifica si hay una fecha antes de mostrarla
  const mostrarFecha = formatearFecha(fecha);

  return (
    <div className="stats-back">
      <div className="div-stats">
        <div className="circulo">
          <p className="fecha">
            <h2>{formatearFecha(fecha)}</h2>
          </p>
        </div>

        <div className="des-stats">
          <h1>Tu primera tarea comenzó</h1>
        </div>
      </div>
      <div className="div-stats">
        <div className="circulo">
          <p className="fecha">
            <h2 className="stats">
              {contadorTareas ? ` ${contadorTareas}` : "?"}
            </h2>
          </p>
        </div>

        <div className="des-stats">
          <h1>Tareas Pendientes</h1>
        </div>
      </div>

      {/* Mostrar el contador de tareas en lugar de la lista */}
      <div className="div-stats">
        {/* <div className="circulo">
          <p className="fecha">
            {fecha ? (
              <>
                Agregado el: <span>{mostrarFecha}</span>
              </>
            ) : (
              "Fecha no disponible"
            )}
          </p>
        </div> */}

        {/* <div className="des-stats">
          <h1>Tu primera tarea comenzó</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Stats;
























//////////////////////////////////FUNCIONA AL 100% 

// // Stats.js
// import React, { useState, useEffect } from "react";
// import { formatearFecha } from "../components/helpers";

// const Stats = ({ tareas, fecha }) => {
//   const [contadorTareas, setContadorTareas] = useState(0);

//   useEffect(() => {
//     setContadorTareas(tareas.length);
//   }, [tareas]);

//   // Verifica si hay una fecha antes de mostrarla
//   const mostrarFecha = formatearFecha(fecha);

//   return (
//     <div className="stats-back">
//       <div className="div-stats">
//         <div className="circulo">
//           <p className="fecha">
//             <h2>{formatearFecha(fecha)}</h2>
//           </p>
//         </div>

//         <div className="des-stats">
//           <h1>Tu primera tarea comenzó</h1>
//         </div>
//       </div>
//       <div className="div-stats">
//         <div className="circulo">
//           <p className="fecha">
//             <h2 className="stats">
//               {contadorTareas ? ` ${contadorTareas}` : "?"}
//             </h2>
//           </p>
//         </div>

//         <div className="des-stats">
//           <h1>Tareas Pendientes</h1>
//         </div>
//       </div>

//       {/* Mostrar el contador de tareas en lugar de la lista */}
//       <div className="div-stats">
//         <div className="circulo">
//           <p className="fecha">
//             {fecha ? (
//               <>
//                 Agregado el: <span>{mostrarFecha}</span>
//               </>
//             ) : (
//               "Fecha no disponible"
//             )}
//           </p>
//         </div>

//         <div className="des-stats">
//           <h1>Tu primera tarea comenzó</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stats;
