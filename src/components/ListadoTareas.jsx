// ListadoTareas.jsx
import React from "react";
import Tarea from "../components/Tarea";

const ListadoTareas = ({ tareas, setTareaEditar, eliminarTarea }) => {
  return (
    <div className="">
      <h2>{tareas.length ? "Tareas" : "No Hay Tarea"}</h2>

      {Array.isArray(tareas) && tareas.length > 0
        ? tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              setTareaEditar={setTareaEditar}
              eliminarTarea={eliminarTarea}
            />
          ))
        : null}
    </div>
  );
};

export default ListadoTareas;

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
