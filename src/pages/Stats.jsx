// Stats.js
import React, { useState, useEffect } from "react";
import { formatearFecha } from "../components/helpers";

const Stats = ({ tareas, fecha }) => {
  const [contadorTareas, setContadorTareas] = useState(0);

  useEffect(() => {
    setContadorTareas(tareas.length);
  }, [tareas]);

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
          <h1>Your first task has begun!</h1>
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
          <h1>Pending Tasks</h1>
        </div>
      </div>

      <div className="div-stats"></div>
    </div>
  );
};

export default Stats;
