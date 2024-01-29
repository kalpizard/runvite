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
    <div className="listado-gastos contenedor">
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
        <p className="no-hay">No tasks available.</p>
      )}
    </div>
  );
};

export default ListadoTareas;
