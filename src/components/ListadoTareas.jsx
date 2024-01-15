
import React from "react";
import Tarea from "./Tarea";

const ListadoTareas = ({ tareas }) => {
  return (
    <div className="">
      <h2>{tareas.length ? 'Tareas' : 'No Hay Tarea'}</h2>
      
      {tareas.map(tarea => (
        <Tarea 
        key={tarea.id}
         tarea={tarea} 
         />
      ))}
    </div>
  );
};

export default ListadoTareas;
































// import React from "react";

// const ListadoTareas = () => {
//   return (
//     <div className="">
//  <h2>{tareas.length ? 'Tareas' : 'No Hay Tarea'}</h2>

//     </div>
//   );
// };

// export default ListadoTareas;
