// Tarea.jsx
import React from "react";
import Swal from 'sweetalert2'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../components/helpers";
import Icono1 from "../imgs/dificultad_1.png";
import Icono2 from "../imgs/dificultad_2.png";
import Icono3 from "../imgs/dificultad_3.png";

const diccionarioIconos = {
  1: Icono1,
  2: Icono2,
  3: Icono3,
};

const Tarea = ({ tarea, setTareaEditar, eliminarTarea }) => {
  const { dificultad, nombre, descripcion, id, fecha } = tarea;

 


  const congratsTask = (id) => {
   

    if (dificultad == 3) {
      console.log(dificultad);
      Swal.fire({
        title: '¡Cuidado!',
        text: 'Esta tarea tiene dificultad 3. ¿Estás seguro de eliminarla?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        
      });
      eliminarTarea(id)
      return null
    }

    eliminarTarea(id)
    
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        key={id} // Asignar una clave única aquí
        leadingActions={
          <LeadingActions>
            <SwipeAction onClick={() => congratsTask(id)} destructive={true}>
              Borrar
            </SwipeAction>
          </LeadingActions>
        }
        trailingActions={
          <TrailingActions>
            <SwipeAction onClick={() => setTareaEditar(tarea)}>
              Editar
            </SwipeAction>
          </TrailingActions>
        }
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
              src={diccionarioIconos[dificultad]}
              alt={`icono-dificultad-${dificultad}`}
            />

            <div className="descripcion gasto">
              <p className="nombre">{nombre}</p>
              <p className="descripcion">{descripcion}</p>
              <p className="fecha">
                Agregado el: <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Tarea;
