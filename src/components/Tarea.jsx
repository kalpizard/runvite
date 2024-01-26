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
        title: 'Good Job!',
        text: 'La tarea compleja fue eliminada.',
        icon: 'success',
        timer: 3000, // Tiempo en milisegundos (en este caso, 3 segundos)
        showConfirmButton: false, // Oculta el botón de confirmación
        
      });
      eliminarTarea(id)
      return null
    }

    Swal.fire({
      title: '',
      text: 'Eliminado exitosamente.',
      icon: 'success',
      timer: 2000, // Tiempo en milisegundos (en este caso, 3 segundos)
      showConfirmButton: false, // Oculta el botón de confirmación
      
    });
    eliminarTarea(id)
    
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        key={id} // Asignar una clave única aquí
        leadingActions={
          <LeadingActions>
            <SwipeAction onClick={() => congratsTask(id)} destructive={true}>
              Delete
            </SwipeAction>
          </LeadingActions>
        }
        trailingActions={
          <TrailingActions>
            <SwipeAction onClick={() => setTareaEditar(tarea)}>
              Edit
            </SwipeAction>
          </TrailingActions>
        }
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
              src={diccionarioIconos[dificultad]}
              alt={`nivel${dificultad}`}
            />

            <div className="descripcion gasto">
              <p className="nombre">{nombre}</p>
              <p className="descripcion">{descripcion}</p>
             
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Tarea;
