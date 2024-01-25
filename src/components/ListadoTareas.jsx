import React, { useState } from "react";
import Tarea from "../components/Tarea";

const ListadoTareas = ({ tareas, setTareaEditar, eliminarTarea }) => {
  const [contadorTareasEliminadas, setContadorTareasEliminadas] = useState(0);

  const handleEliminarTarea = (id) => {
    eliminarTarea(id);
    // Incrementa el contador de tareas eliminadas al eliminar una tarea
    setContadorTareasEliminadas((prevContador) => prevContador + 1);
  };

  return (
    <div className="no hay">
      {Array.isArray(tareas) && tareas.length > 0 ? (
        <>
          {/* <p>{contadorTareasEliminadas ? `Tareas Eliminadas: ${contadorTareasEliminadas}` : ""}</p> */}
          {tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              setTareaEditar={setTareaEditar}
              eliminarTarea={() => handleEliminarTarea(tarea.id)}
            />
          ))}
        </>
      ) : (
        <p className="no-hay">No hay tareas disponibles.</p>
      )}
    </div>
  );
};

export default ListadoTareas;




















//SIN "CONTADOR"
// // ListadoTareas.jsx
// import React from "react";
// import Tarea from "../components/Tarea";

// const ListadoTareas = ({ tareas, setTareaEditar, eliminarTarea }) => {
//   return (
//     <div className="">
//       <h2>{tareas.length ? "Tareas" : "No Hay Tarea"}</h2>

//       {Array.isArray(tareas) && tareas.length > 0 ? (
//         tareas.map((tarea) => (
//           <Tarea
//             key={tarea.id}
//             tarea={tarea}
//             setTareaEditar={setTareaEditar}
//             eliminarTarea={eliminarTarea}
//           />
//         ))
//       ) : (
//         <p>No hay tareas disponibles.</p>
//       )}
//     </div>
//   );
// };

// export default ListadoTareas;

//FUNCIONA EN EL BORRRRRAR
// // ListadoTareas.jsx
// import React from "react";
// import Tarea from "../components/Tarea";

// const ListadoTareas = ({ tareas, setTareaEditar, eliminarTarea }) => {
//   return (
//     <div className="">
//       <h2>{tareas.length ? 'Tareas' : 'No Hay Tarea'}</h2>

//       {tareas.map(tarea => (
//         <Tarea
//           key={tarea.id}
//           tarea={tarea}
//           setTareaEditar={setTareaEditar}
//           eliminarTarea={eliminarTarea}
//         />
//       ))}
//     </div>
//   );
// };

// export default ListadoTareas;

//antes
// import React from "react";
// import Tarea from "../components/Tarea";

// const ListadoTareas = ({ tareas, setTareaEditar }) => {
//   return (
//     <div className="">
//       <h2>{tareas.length ? 'Tareas' : 'No Hay Tarea'}</h2>

//       {tareas.map(tarea => (
//         <Tarea

//         key={tarea.id}
//          tarea={tarea}
//         //  SE LE APLICA A CADA UNA DE LAS TAREAS
//          setTareaEditar={setTareaEditar}

//          />
//       ))}
//     </div>
//   );
// };

// export default ListadoTareas;

// import React from "react";

// const ListadoTareas = () => {
//   return (
//     <div className="">
//  <h2>{tareas.length ? 'Tareas' : 'No Hay Tarea'}</h2>

//     </div>
//   );
// };

// export default ListadoTareas;
