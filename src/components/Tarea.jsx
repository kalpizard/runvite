// Tarea.jsx
import React from "react";
import { formatearFecha } from "../components/helpers";

import Icono1 from "../imgs/dificultad_1.png";
import Icono2 from "../imgs/dificultad_2.png";
import Icono3 from "../imgs/dificultad_3.png";

// COPIE Y PEGUE LOS OPTIONS y asociamos
const diccionarioIconos = {
  1: Icono1,
  2: Icono2,
  3: Icono3,
};

const Tarea = ({ tarea }) => {
  const { dificultad, nombre, descripcion, id, fecha } = tarea;

  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        {/* Mostrar la imagen correspondiente a la dificultad */}
        <img src={diccionarioIconos[dificultad]} alt={`icono${dificultad}`} />

        <div className="descripcion gasto">
          {/* Eliminar la línea que muestra el número de dificultad */}
          {/* <p className="categoria">{dificultad}</p> */}

          <p className="nombre">{nombre}</p>
          <p className="descripcion">{descripcion}</p>
          <p className="fecha">
            Agregado el: <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tarea;
