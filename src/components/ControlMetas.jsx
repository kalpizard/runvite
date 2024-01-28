import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlMetas = ({
  meta,
  setTareas,
  setMeta, // Asegúrate de que setMetas se pasa como prop
  setIsValidMeta,
  setNombreUsuario,
}) => {
  const [porcentaje, setPorcentaje] = useState(30);

  const handleResetApp = () => {
    const resultado = window.confirm("¿VOLVER A COMENZAR?");
    if (resultado) {
      setTareas([]);
      setMeta("");
      setIsValidMeta(false);
      setNombreUsuario("");
      localStorage.removeItem("goal");
      localStorage.setItem("goal", "");
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar value={porcentaje} />
      </div>
      <div className="contenido-meta">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          REINICIAR
        </button>
        <p className="span-meta">
          <span className="span-meta">In progress: </span>
          {meta}
        </p>
      </div>
    </div>
  );
};

export default ControlMetas;
