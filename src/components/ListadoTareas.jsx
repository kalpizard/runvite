import React from "react";

const ListadoTareas = ({ tareas }) => {
  return (
    <div className="">
      <h2>{tareas.length ? 'Tareas' : 'No Hay Tarea'}</h2>
     
      {tareas.map((tarea) => (
          <div key={tarea.id}>
          <p>{tarea.nombre}</p>
        
        </div>
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
